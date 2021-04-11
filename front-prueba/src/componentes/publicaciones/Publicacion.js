import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'

import '../../styles/publicacion.css'

import personLog from '../../assets/personIcon.jpg';
import { getTimeFixes } from '../../helpers/time';
import { CountComents } from './CountComents';
import Comentarios from './Comentarios';
import { agregarComentario } from '../../actions/publicacionAction';

const Publicacion = ({publicacion}) => {

    const dispatch = useDispatch();
    
    const {id_publicacion, estado, comentarios, fecha, nombre, urlFoto} = publicacion; 
    
    const {time, textTime} = getTimeFixes(fecha) 

    /////////////// btn comentar
    const [showComentar, setShowComentar] = useState(false);    

    ///////////////new comment
    const {nombre: nombreUsuario} = useSelector(state => state.authReducer)
    const [newcoment, setNewcoment] = useState('');
    
    useEffect(() => {
        if (!showComentar && !!newcoment.trim()) {       
            const comentToSave = {
                id_comentario: Number(new Date()),
                nombreUsuario,
                foto: null,
                fecha: Number(new Date()),
                comentario: newcoment
            }        
            dispatch(agregarComentario(id_publicacion, comentToSave))
            setNewcoment('')            
        }
    }, [dispatch, showComentar])
   
   ////////////////////////mostrar lista de comentarios
   const [listComents, setlistComents] = useState(false);

   

    return (
        <>
        <div className="card border-container">
            <div className="row public-pb">
                <div className="col col-img">
                    <img className="foto" src={!urlFoto ? personLog : urlFoto} alt="" />
                </div>
                <div className="col2">
                    <p className="nombre font1">{nombre}</p>
                    <p className="fecha ">Hace {time} {textTime}</p>
                    <p className="estado">{estado}</p>
                </div>
            </div>
            { (comentarios.length > 0) && <CountComents comentarios={comentarios}/> }
            
            <div className="row justContSpaceAround public-bt">
                
                <div onClick={() => {
                    setlistComents(!listComents)
                    setShowComentar(!listComents)
                    }} className="col w50 font1 public-cont1">
                        Reaccionar
                </div>
                <div onClick={() => {setShowComentar(!showComentar)}} className="col w50 font1 public-cont2">
                    Comentar
                </div>
            </div>
        </div>
        {(listComents || showComentar)
            &&
            <Comentarios comentarios={comentarios} comentar={showComentar} comentario={setNewcoment}/>}
        
        
        </>
    )
}

Publicacion.propTypes = {
    publicacion: PropTypes.object.isRequired
}

export default Publicacion
