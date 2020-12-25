import F1Model from "../models/F1Model"
import Year from "../utils/Year"

export default class F1 {

    static async getChampion(question: string) {
        const year = Year.getYear(question)
        const f1Model = new F1Model(year)
        await f1Model.findChampion()
        return f1Model.toString()
    }
}