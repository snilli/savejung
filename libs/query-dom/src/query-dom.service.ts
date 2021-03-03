import {Injectable} from '@nestjs/common'
import * as phin from 'phin'
import * as cheerio from 'cheerio'

@Injectable()
export class QueryDomService {
    getElement = async url => {
        const res = await phin(url)
        const html = parseBody(res)

        return cheerio.load(html)
    }
}
