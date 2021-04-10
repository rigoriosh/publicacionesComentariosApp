import React from 'react'
import personLog from '../../assets/personIcon.jpg';
import { getTimeFixes } from '../../helpers/time';

export const Comentario = ({comentario}) => {
    
    const {nombreUsuario, foto, fecha, comentario: comen} = comentario;
  
    const {time, textTime} = getTimeFixes(new Date(fecha)) 
    return (
        <div className=" border-container">
                <div className="row" >
                    <div className="col col-img">
                    <img className="foto" src={!foto ? personLog : foto} alt="" />
                    </div>
                    <div className="col2">
                        <p className="nombre">{nombreUsuario}</p>
                        <p className="estado">{comen}</p>
                        <p className="fecha">Hace {time} {textTime}</p>
                    </div>
                </div>           
                
            </div>
    )
}
