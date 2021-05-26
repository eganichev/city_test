import { Dispatch } from "react";
import { CommonActionTypes } from "./actions/app";
import { SET_IS_FETCHING } from "./actions/constants";

let initialState = {
    isFetching: false
}

export type InitialStateType = typeof initialState

export const commonReducer = (state = initialState, action: CommonActionTypes): InitialStateType => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state
    }
}
