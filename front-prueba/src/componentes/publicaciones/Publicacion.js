import React from 'react'
import PropTypes from 'prop-types'
import personLog from '../../assets/personIcon.jpg';
import { getTimeFixes } from '../../helpers/time';
import { CountComents } from '../CountComents';
import { Comentarios } from '../Comentarios';

const Publicacion = ({publicacion}) => {
    console.log(publicacion);
    const {id_publicacion, estado, comentarios, fecha, nombre, urlFoto} = publicacion; 
    
    const {time, textTime} = getTimeFixes(fecha)    
    ///////////////
    
    const comentar = (id_publicacion) => {
        console.log('comentar', id_publicacion);
    }
    return (
        <>
        <div className="card border-container">
            <div className="row" >
                <div className="col col-img">
                    <img className="foto" src={!urlFoto ? personLog : urlFoto} alt="" />
                </div>
                <div className="col2">
                    <p className="nombre">{nombre}</p>
                    <p className="fecha">Hace {time} {textTime}</p>
                    <p className="estado">{estado}</p>
                </div>
            </div>
            { (comentarios.length > 0) && <CountComents/> }
            
            <div className="row justContSpaceAround">
                
                <div className="col w50 font1 border-container">Reaccionar</div>
                <div onClick={() => {comentar(id_publicacion)}} className="col w50 font1 border-container">Comentar</div>
            </div>
            
            
        </div>
        { (/* comentarios.length > 0 */ true) && <Comentarios/> }
        
        </>
    )
}

Publicacion.propTypes = {
    publicacion: PropTypes.object.isRequired
}

export default Publicacion
