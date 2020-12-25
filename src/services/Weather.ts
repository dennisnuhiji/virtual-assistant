import WeatherModel from '../models/WeatherModel'
import LocationUtil from '../utils/Location'

export default class Weather {

    static async getCurrent(question: string) {
        const { lat, lon, city } = LocationUtil.getAddressDetails(question)
        const weatherModel = new WeatherModel(lat, lon, city)
        await weatherModel.weatherNow()
        return weatherModel.toString()
    }
}