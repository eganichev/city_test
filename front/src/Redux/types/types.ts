export interface ICountry {
    country: string
    code: string
    populationCounts: IPopulation[]
}

export interface ICity {
    city: string
    country: string
    populationCounts: IPopulation[]
}

export interface IPopulation {
    year: number
    value: number
    sex?: string
    reliability?: string
}