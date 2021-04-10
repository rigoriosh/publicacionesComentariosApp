import React from 'react'
import personLog from '../assets/personIcon.jpg';

export const Comentario = () => {
    return (
        <div className=" border-container">
                <div className="row" >
                    <div className="col col-img">
                        <img className="foto" src={personLog} alt="" />
                    </div>
                    <div className="col2">
                        <p className="nombre">Juan Rodriguez</p>
                        <p className="estado">
                        Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.
                        </p>
                        <p className="fecha">Hace 2 días</p>
                    </div>
                </div>           
                
            </div>
    )
}
