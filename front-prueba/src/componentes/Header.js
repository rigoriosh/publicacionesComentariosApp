import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarPublicacion } from '../actions/publicacionAction';
import { useForm } from '../hooks/useForm'

export const Header = () => {
    const dispatch = useDispatch();
    const {nombre} = useSelector(state => state.authReducer)
    const [fields, handledInputChange, resetFields] = useForm({estado:''})
    const {estado} = fields;
    const publicar = (e) => {
        e.preventDefault()
        /* validar el campo estado */
        if(estado.trim()){
            const publicacion = {
                id_publicacion: Number(new Date()),
                nombre,
                fecha: new Date(),
                urlFoto: null,
                estado,
                comentarios:[]
            }
            dispatch(agregarPublicacion(publicacion));
            resetFields()
         }
    }
    return (
        <header className="App-header border-container">      
        <form onSubmit={publicar}>
            <input className="input-header" type="text" name="estado" value={estado} onChange={handledInputChange} placeholder="Escribe aquí tu estado"/>
            <button type="submit">Publicar</button>            
        </form>  
        </header>
    )
}
