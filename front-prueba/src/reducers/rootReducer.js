import { combineReducers } from 'redux';

import { publicacionReducer } from "./publicacionReducer";
import { authReducer } from "./authReducer";


export const rootReducer = combineReducers({
    publicacionReducer,
    authReducer
})

