import { types } from "../types/types";


const initialState = {
    publicaciones: [
        /* {
            id_publicacion: null,
            nombreUsuario: null, //id_user
            fecha: null,
            urlFoto: null,
            estado: null,
            comentarios: [
                {
                    nombreUsuario: null,
                    foto: null,
                    fecha: null,
                    comentario: null
                }
            ]
        } */
    ]
}

export const publicacionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.nuevaPublicacion:
            return {
                ...state,
                publicaciones: [
                    action.payload,
                    ...state.publicaciones
                ]
            }
        
    
        default:
            return state;
    }
}