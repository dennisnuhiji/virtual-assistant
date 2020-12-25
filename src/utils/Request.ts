import { http } from 'follow-redirects'
import { FailCodesMap } from '../types/FailCodesMap'

export enum RequestMethod {
    DELETE = 'DELETE',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

interface IHTTPResponse {
    body: any,
    statusCode: number,
    statusMessage: string
}

interface IRequest { hostname: string; path: string; method: RequestMethod; headers?: any; body?: any }

export class Request {
    requestProps: IRequest
    protected body: any

    constructor(requestProps?: IRequest, body?: any) {
        this.requestProps = requestProps
        this.body = body
    }

    public async execute(): Promise<IHTTPResponse> {
        return new Promise((resolve, reject) => {
            this.requestProps.headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                ...this.requestProps.headers
            }

            const req = http.request(this.requestProps, (res) => {
                let response = ''
                res.setEncoding('utf8')
                res.on('data', chunk => response += chunk)

                res.on('end', () => {
                    if (response.startsWith('{')) {
                        try {
                            response = JSON.parse(response)
                        } catch (error) {
                            return reject(FailCodesMap.SOURCE_NOT_REACHABLE)
                        }
                    }
                    resolve({
                        body: response,
                        statusCode: res.statusCode,
                        statusMessage: res.statusMessage
                    })
                })
            })

            req.on('error', (e) => reject(FailCodesMap.SOURCE_NOT_REACHABLE))

            this.body = this.body ? JSON.stringify(this.body) : ''
            req.write(this.body)
            req.end()
        })
    }
}
