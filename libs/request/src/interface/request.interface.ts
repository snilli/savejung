import * as http from 'http'

export interface HttpRequestOptions {
    https?: boolean
    maxRetry?: number
    delayRetry?: number
    timeout?: number
}

export interface HttpsRequestPayload {
    name?: string
    url: string
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
    path: string
    body?: any
    query?: string
    headers?: {[name: string]: string}
    timeout?: number
    json?: boolean
}

export interface HttpsRequest {
    name?: string
    url: string
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
    path: string
    body?: string
    query?: string
    headers?: {[name: string]: string}
}

export interface HttpsResponse extends http.IncomingMessage {
    isError: boolean
    body: Buffer
    req: HttpsRequest
}
