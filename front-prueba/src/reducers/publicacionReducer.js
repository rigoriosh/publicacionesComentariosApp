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
                    id_comentario: null,
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

        case types.nuevoComentario:
            state.publicaciones.map(
                p => (p.id_publicacion === action.payload.id_publicacion)
                ? p.comentarios = [action.payload.comentario, ...p.comentarios]
                : p
            )
            return {
                ...state
            }

        case types.updateDb:
            return {
                publicaciones: action.payload
            }
            
        case types.limpiarPublicaciones:
            return{
                ...state,
                ...initialState
            }
    
        default:
            return state;
    }
}