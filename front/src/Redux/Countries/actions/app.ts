import { ICity, ICountry } from "../../types/types";
import { SET_COUNTRIES_DATA } from "./constants";

export type AppActionTypes = SetCountriesDataActionType

type SetCountriesDataActionType = {
    type: typeof SET_COUNTRIES_DATA,
    countries: ICountry[]
}

export const setCountriesData = (countries: ICountry[]):SetCountriesDataActionType => ({
    type: SET_COUNTRIES_DATA, countries
})
