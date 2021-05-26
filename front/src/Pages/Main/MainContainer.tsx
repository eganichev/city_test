import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../Redux/reduxStore'
import { ICity, ICountry, IPopulation } from '../../Redux/types/types'
import { getCountries } from '../../Redux/Countries/countryReducer'
import { getCities } from '../../Redux/Cities/cityReducer'
import Main from './Main'
import { setCitiesData } from '../../Redux/Cities/actions/app'
import { getPopulations } from '../../Redux/Population/populationReducer'
import { setPopulationData } from '../../Redux/Population/actions/app'

interface Props{
    getCountries: () => void
    getCities: (country: string) => void
    setCitiesData: (cities: ICity[]) => void
    getPopulations: (city: string) => void
    setPopulationData: (populace: IPopulation | null) => void
    countries: ICountry[]
    cities: ICity[]
    populace: IPopulation | null
}

const MainContainer = ({ getCountries, getCities, setCitiesData, getPopulations, setPopulationData, countries, cities, populace }: Props) => {
    const [currentCountry, setCurrentCountry] = useState<string | null>(null)
    const [currentCity, setCurrentCity] = useState<string | null>(null)

    useEffect(() => {
        getCountries()
    }, [])

    useEffect(() => {
        if(currentCountry){
            getCities(currentCountry)
        }else{
            setCitiesData([])
            setCurrentCity(null)
        }
    }, [currentCountry])

    useEffect(() => {
        if(currentCity){
            getPopulations(currentCity)
        }else{
            setPopulationData(null)
        }
    }, [currentCity])


    return(
        <Main countries={countries} cities={cities} populace={populace} setCurrentCountry={setCurrentCountry} setCurrentCity={setCurrentCity}/>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    countries: state.country.countries,
    cities: state.city.cities,
    populace: state.populations.populace,
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {
    getCountries, getCities, setCitiesData, getPopulations, setPopulationData
})(MainContainer)
