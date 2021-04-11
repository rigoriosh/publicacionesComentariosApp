import { agregarComentario, agregarPublicacion, updateDBtest } from "../../actions/publicacionAction"
import { types } from "../../types/types"

describe('Pruebas de las acciones de publicacion', () => {
    
    test('should retornar un obj con el type y el payload', () => {
        
        const publicacion = {
            id_publicacion: 12145,
            nombre: 'rigorios',
            fecha: new Date(),
            urlFoto: null,
            estado: 'test',
            comentarios:[]
        }

        const resp = agregarPublicacion(publicacion)        
        expect(resp).toEqual(
            {
                type: types.nuevaPublicacion,
                payload: expect.objectContaining(tipoPublicacion)
             }
         )
    })

    test('should agregarComentario return a obj', () => {
        
        const coment = {
            id_comentario: Number(new Date()),
            nombreUsuario: 'rigorios',
            foto: null,
            fecha: Number(new Date()),
            comentario: 'newcoment'
        }

        const resp = agregarComentario(34343434, coment)      
        
        expect(resp).toEqual(
            {
                type: types.nuevoComentario,
                payload: expect.objectContaining(tipoComentario)
             }
         )
    })
    
    test('should updateDBtest return a obj', () => {
        
        //este array lo puede retornar el vacio o con info segun lo almacenado en el localStorage
        const arrayTest = [{a:1, b:'kk'}]; 

        const resp = updateDBtest(arrayTest);
        
        expect(resp).toEqual({
            type: types.updateDb,
            payload: expect.any(Array)
        })
    })
    
    
})


const tipoPublicacion = {
    id_publicacion: expect.any(Number),
    nombre: expect.any(String),
    fecha: expect.any(Date),
    urlFoto: null ,
    estado: expect.any(String),
    comentarios: expect.any(Array)
  }

  const tipoComentario = {
    id_publicacion: expect.any(Number),
    comentario:{
        id_comentario: expect.any(Number),
        nombreUsuario: expect.any(String),
        foto: null,
        fecha: expect.any(Number),
        comentario: expect.any(String)
    }
  }