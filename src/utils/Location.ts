import { FailCodesMap } from '../types/FailCodesMap'
import LocationTypes from '../types/Locations'

// Ideally this would be implemented with Google's Geolocation service.
export default class Location {
    static getAddressDetails(question: string) {
        try {
            const city = question.match(/(London|Viena)/)[0].toUpperCase()
            return LocationTypes[city]
        } catch (e) {
            throw FailCodesMap.COUNTRY_NOT_SUPPORTED
        }
    }
}