export interface Country {
    country: string
    code: string
    populationCounts: PopulationCount[] 
}

export interface City {
    city: string
    country: string
    populationCounts: PopulationCount[]
}

export interface PopulationCount {
    value: number
    year: number
    sex?: string
    reliability?: string
}