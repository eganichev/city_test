import { IPopulation } from "../../types/types";
import { SET_POPULATION_DATA } from "./constants";

export type AppActionTypes = SetPopulationDataActionType

type SetPopulationDataActionType = {
    type: typeof SET_POPULATION_DATA,
    populace: IPopulation | null
}

export const setPopulationData = (populace: IPopulation | null):SetPopulationDataActionType => ({
    type: SET_POPULATION_DATA, populace
})
