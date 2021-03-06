import { types } from "../types/types";

const initialState = {   
    uid: null,
    nombre: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload                
            }

        case types.authLogout:              
            return {
                ...state,                
                ...initialState
            }
            
        default:
            return state;
    }
}