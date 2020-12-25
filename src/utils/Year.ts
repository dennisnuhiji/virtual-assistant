import { FailCodesMap } from "../types/FailCodesMap"

export default class Year {
    static getYear(question: string) {
        try {
            const year = question.match(/[0-9]{4}/)[0]
            return year
        } catch (e) {
            throw FailCodesMap.INVALID_YEAR
        }
    }
}