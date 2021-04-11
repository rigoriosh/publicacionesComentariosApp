import { types } from "../types/types";

export const agregarPublicacion = (publicacion) => ({
    type: types.nuevaPublicacion,
    payload: publicacion
})

export const agregarComentario = (id_publicacion, comentario) => (
    
    {
        type: types.nuevoComentario,
        payload: {
            id_publicacion,
            comentario
        }
    }
)

export const updateDBtest = (publicaciones) => ({

    type: types.updateDb,
    payload: publicaciones
})

export const limpiarPublicacionesLogout = () => ({type: types.limpiarPublicaciones});
