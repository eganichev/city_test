import { ThunkAction } from "redux-thunk";
import { appApi } from "../../Api/api";
import { CommonActionTypes, setIsFetching } from "../Common/actions/app";
import { AppStateType } from "../reduxStore";
import { IPopulation } from "../types/types";
import { AppActionTypes, setPopulationData } from "./actions/app";
import { SET_POPULATION_DATA } from "./actions/constants";

interface IInitialState {
    populace: null | IPopulation
}

let initialState: IInitialState = {
    populace: null
}

export type InitialStateType = typeof initialState

export const populationReducer = (state = initialState, action: AppActionTypes): InitialStateType => {
    switch(action.type){
        case SET_POPULATION_DATA: {
            return { ...state, populace: action.populace }
        }
        default:
            return state
    }
}

export const getPopulations = (city: string): ThunkAction<Promise<void>, AppStateType, undefined, AppActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await appApi.getPopulations(city)
        dispatch(setPopulationData(response))
        dispatch(setIsFetching(false))
    }catch(err){
        dispatch(setIsFetching(false))
    }
}