import { types } from "../types/types";

const initialState = {
    checking: true,
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
        case types.authCheckingFinish:
            return {
                ...state,                
                checking: false
            }
        case types.authLogout:            
            return {
                ...state,                
                ...initialState,
                checking: false
            }
        default:
            return state;
    }
}