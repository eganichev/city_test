import { ICity } from "../../types/types";
import { SET_CITIES_DATA } from "./constants";

export type AppActionTypes = SetCitiesDataActionType


type SetCitiesDataActionType = {
    type: typeof SET_CITIES_DATA,
    cities: ICity[]
}

export const setCitiesData = (cities: ICity[]): SetCitiesDataActionType => ({
    type: SET_CITIES_DATA, cities
})
