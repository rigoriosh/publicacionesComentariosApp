import { types } from "../types/types";

export const agregarPublicacion = (publicacion) => ({
    type: types.nuevaPublicacion,
    payload: publicacion
})

