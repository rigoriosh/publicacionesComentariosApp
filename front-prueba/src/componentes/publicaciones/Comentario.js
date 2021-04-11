import React from 'react'

import '../../styles/comentario.css'

import personLog from '../../assets/personIcon.jpg';
import { getTimeFixes } from '../../helpers/time';

export const Comentario = ({comentario}) => {
    
    const {nombreUsuario, foto, fecha, comentario: comen} = comentario;
  
    const timeFixes = getTimeFixes(new Date(fecha)) 
    
    const {time, textTime} = timeFixes;

    return (
        <div className=" ">
                <div className="row" >
                    <div className="col col-img">
                        <img className="foto" src={!foto ? personLog : foto} alt="" />
                    </div>

                    <div className="col2">
                        <div className="row">
                            <p className="nombre font1">{nombreUsuario}</p>
                            <p className="coment-estado">{comen}</p>
                        </div>
                        <p className="fecha">Hace {time} {textTime}</p>
                    </div>
                </div>           
                
            </div>
    )
}
