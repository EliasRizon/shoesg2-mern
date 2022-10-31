import { combineReducers } from 'redux'

import shoesReducer from './shoesReducer'
import authReducer from './authReducer'

export const reducers = combineReducers({ shoesReducer, authReducer })
