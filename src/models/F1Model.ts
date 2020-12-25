import { Request, RequestMethod } from "../utils/Request"
import ENV from '../../config'
import { F1ApiResponseBody } from "../types/F1ApiResponseBody"
import { FailCodesMap } from "../types/FailCodesMap"

export default class F1Model {
    name: string
    lastname: string
    nationality: string
    constructorName: string
    year: string

    constructor(year: string) {
        this.year = year
    }

    parse(body: F1ApiResponseBody) {
        const data = body.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
        this.name = data.Driver.givenName
        this.lastname = data.Driver.familyName
        this.nationality = data.Driver.nationality
        this.constructorName = data.Constructors[0].name
    }

    toString() {
        if (this.name && this.lastname && this.year)
            return `The champion in ${this.year} was the ${this.nationality} driver ${this.name} ${this.lastname}, from the team of ${this.constructorName}.`
        throw FailCodesMap.QUESTION_NOT_SUPPORTED
    }

    async findChampion() {
        const path = `/api/f1/${this.year}/driverStandings.json`
        const request = new Request({ hostname: ENV.F1_API_URL, path, method: RequestMethod.GET, })
        const response = await request.execute()
        this.parse(response.body)
    }
}