export interface IFailResponse {
    statusCode: number,
    message: string
}

type FailCodesIndex = 'QUESTION_NOT_SUPPORTED' | 'SOURCE_NOT_REACHABLE' | 'COUNTRY_NOT_SUPPORTED'
    | 'INVALID_YEAR'

export const FailCodesMap: { [key in FailCodesIndex]: IFailResponse } = {
    QUESTION_NOT_SUPPORTED: {
        statusCode: 400,
        message: 'Currently I can\'t find answer to that question, Sorry!'
    },
    SOURCE_NOT_REACHABLE: {
        statusCode: 400,
        message: 'My source for that question is not reachable'
    },
    COUNTRY_NOT_SUPPORTED: {
        statusCode: 400,
        message: 'Sorry I don\'t know the weather in that country, try with London or Viena'
    },
    INVALID_YEAR: {
        statusCode: 400,
        message: 'What\'s the year?'
    }
}
