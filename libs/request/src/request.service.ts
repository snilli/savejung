import {Injectable} from '@nestjs/common'
import HttpAgent, {HttpsAgent} from 'agentkeepalive'
import * as phin from 'phin'
import * as http from 'http'
import {HttpRequestOptions, HttpsRequestPayload, HttpsResponse} from './interface/request.interface'

@Injectable()
export class RequestService {
    private readonly core: http.ClientRequestArgs
    private readonly maxRetry: number = 3
    private readonly delayRetry: number = 100
    private readonly timeout: number = 30000

    constructor(options?: HttpRequestOptions) {
        if (options) {
            if (options.https != null) {
                if (options.https) {
                    this.core = {
                        agent: new HttpsAgent(),
                    }
                } else {
                    this.core = {
                        agent: new HttpAgent(),
                    }
                }
            } else {
                this.core = {
                    agent: new HttpsAgent(),
                }
            }

            if (options.maxRetry != null) {
                this.maxRetry = options.maxRetry
            }

            if (options.delayRetry != null) {
                this.delayRetry = options.delayRetry
            }

            if (options.timeout != null) {
                this.timeout = options.timeout
            }
        } else {
            this.core = {
                agent: new HttpsAgent(),
            }
        }
    }

    async request(req: HttpsRequestPayload): Promise<HttpsResponse> {
        let url: string
        if (req.query) {
            url = `${req.url}${req.path}?${req.query}`
        } else {
            url = `${req.url}${req.path}`
        }

        let body: string
        if (req.json) {
            body = JSON.stringify(req.body)
        } else {
            body = req.body
        }

        const res: HttpsResponse = await this.send(url, body, req)

        if (res.statusCode && (res.statusCode < 200 || res.statusCode > 299)) {
            res.isError = true
        }

        return res
    }

    private async send(url: string, body: string, req: HttpsRequestPayload): Promise<HttpsResponse> {
        for (let i = 0; i < this.maxRetry; i++) {
            try {
                const res = ((await phin({
                    url: url,
                    headers: req.headers,
                    core: this.core,
                    timeout: req.timeout ?? this.timeout,
                    method: req.method,
                    data: body,
                })) as unknown) as HttpsResponse

                res.req = {
                    name: req.name,
                    url: req.url,
                    method: req.method,
                    path: req.path,
                    body: body,
                    query: req.body,
                    headers: req.headers,
                }

                if (res.statusCode === 502) {
                    await this.sleep(this.delayRetry)
                    continue
                }

                return res
            } catch (e) {
                if (e.code === 'ETIMEDOUT' || e.code === 'ECONNRESET' || e.code === 'EPIPE') {
                    await this.sleep(this.delayRetry)
                } else {
                    throw new HttpsClientException(e.message, req)
                }
            }
        }

        throw new HttpsClientException('No Request', req)
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}
