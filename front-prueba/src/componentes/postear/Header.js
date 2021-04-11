import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/header.css'

import { useForm } from '../../hooks/useForm'
import { agregarPublicacion} from '../../actions/publicacionAction';


export const Header = () => {

    const dispatch = useDispatch();
    const {nombre} = useSelector(state => state.authReducer)
    const {publicaciones} = useSelector(state => state.publicacionReducer)
    const [fields, handledInputChange, resetFields] = useForm({estado:''})
    const {estado} = fields;

    const publicar = (e) => {
        e.preventDefault()
        
        if(estado.trim()){/* validar el campo estado */
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

    useEffect(() => {
        
        if (publicaciones.length > 0) {
            localStorage.setItem('dbPublicaciones', JSON.stringify(publicaciones))
        }
    }, [publicaciones])



    return (
        <header className="App-header border-container">  
            <form onSubmit={publicar} className="header-form">
                <div className="col">

                    <div className="row header-div-input">
                        <input className="header-input" type="text" name="estado" value={estado} onChange={handledInputChange} placeholder="Escribe aquí tu estado"/>
                    </div>

                    <div className="row justiContFlexEnd header-div-btn">
                        <button type="submit" className="header-btn-publicar cursorpointer">Publicar</button>            
                    </div>
                    
                </div>                        
            </form>  
        </header>
    )
}
