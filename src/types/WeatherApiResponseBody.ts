export type WeatherApiResponseBody = {
    dataseries: DataSeriesEntry[]
}

type DataSeriesEntry = {
    date: number
    weather: string
    temp2m: {
        max: number
        min: number
    }
}