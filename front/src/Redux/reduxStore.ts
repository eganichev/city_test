import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { countryReducer } from './Countries/countryReducer';
import { commonReducer } from './Common/commonReducer'
import { cityReducer } from './Cities/cityReducer'
import { populationReducer } from './Population/populationReducer';

let rootReducer = combineReducers({
    country: countryReducer,
    city: cityReducer,
    populations: populationReducer,
    common: commonReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddlware))

//@ts-ignore
window.store = store

export default store

