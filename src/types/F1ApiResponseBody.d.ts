export type F1ApiResponseBody = {
    MRData: {
        StandingsTable: {
            StandingsLists: StandingsListsEntry[]
        }
    }
}

type StandingsListsEntry = {
    season: string,
    round: string,
    DriverStandings: DriverStandingsEntry[]
}

type DriverStandingsEntry = {
    position: string,
    Driver: {
        givenName: string
        familyName: string,
        dateOfBirth: string,
        nationality: string
    },
    Constructors: ConstructorsEntry[]
}

type ConstructorsEntry = {
    name: string,
    nationality: string
}