import dotenv from 'dotenv'
dotenv.config()

export default {
    PORT: process.env.PORT,
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    F1_API_URL: process.env.F1_API_URL
}