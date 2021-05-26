import { Dispatch } from "react";
import { appApi } from "../../Api/api";
import { AppActionTypes, setCitiesData } from "./actions/app";
import { SET_CITIES_DATA } from "./actions/constants";
import { ICity, ICountry} from "../types/types";
import { CommonActionTypes, setIsFetching } from "../Common/actions/app";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../reduxStore";

let initialState = {
    cities: [] as Array<ICity>
}

export type InitialStateType = typeof initialState

export const cityReducer = (state = initialState, action: AppActionTypes): InitialStateType => {
    switch(action.type){
        case SET_CITIES_DATA: {
            return { ...state, cities: action.cities }
        }
        default:
            return state
    }
}

export const getCities = (country: string): ThunkAction<Promise<void>, AppStateType, undefined, AppActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await appApi.getCities(country)
        dispatch(setCitiesData(response))
        dispatch(setIsFetching(false))
    }catch(err){
        dispatch(setIsFetching(false))
    }
}