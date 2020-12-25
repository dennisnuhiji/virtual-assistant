import { Request, RequestMethod } from "../utils/Request"
import ENV from '../../config'
import { WeatherApiResponseBody } from "../types/WeatherApiResponseBody"
import WeatherType from "../types/WeatherType"
import { FailCodesMap } from "../types/FailCodesMap"

export default class WeatherModel {
    type: string
    temperatureMin: number
    temperatureMax: number
    lat: string
    lon: string
    city: string

    constructor(lat: string, lon: string, city: string) {
        this.lat = lat
        this.lon = lon
        this.city = city
    }

    parse(body: WeatherApiResponseBody) {
        const data = body.dataseries[0]
        this.type = WeatherType[data.weather]
        this.temperatureMin = data.temp2m?.min
        this.temperatureMax = data.temp2m?.max
    }

    toString() {
        if (this.city && this.type)
            return `The weather in ${this.city} is ${this.type}, with temperatures of ${this.temperatureMin} minimum and ${this.temperatureMax} maximum celisus degrees.`
        throw FailCodesMap.QUESTION_NOT_SUPPORTED
    }

    async weatherNow() {
        const path = `/bin/api.pl?lon=${this.lat}&lat=${this.lon}&product=civillight&output=json`
        const request = new Request({ hostname: ENV.WEATHER_API_URL, path, method: RequestMethod.GET, })
        const response = await request.execute()
        this.parse(response.body)
    }
}