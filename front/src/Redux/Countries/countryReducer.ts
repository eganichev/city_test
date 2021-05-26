import { Dispatch } from "react";
import { appApi } from "../../Api/api";
import { AppActionTypes, setCountriesData } from "./actions/app";
import { SET_COUNTRIES_DATA } from "./actions/constants";
import { ICountry} from "../types/types";
import { CommonActionTypes, setIsFetching } from "../Common/actions/app";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../reduxStore";

let initialState = {
    countries: [] as Array<ICountry>
}

export type InitialStateType = typeof initialState

export const countryReducer = (state = initialState, action: AppActionTypes): InitialStateType => {
    switch(action.type){
        case SET_COUNTRIES_DATA: {
            return { ...state, countries: action.countries }
        }
        default:
            return state
    }
}

export const getCountries = (): ThunkAction<Promise<void>, AppStateType, undefined, AppActionTypes | CommonActionTypes> => async (dispatch) => {
    dispatch(setIsFetching(true))
    try{
        let response = await appApi.getCountries()
        dispatch(setCountriesData(response))
        dispatch(setIsFetching(false))
    }catch(err){
        dispatch(setIsFetching(false))
    }
}