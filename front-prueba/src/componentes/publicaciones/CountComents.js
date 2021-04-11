import React from 'react'

import Circle from '../utilsComponent/Circle'
import '../../styles/countComents.css'

export const CountComents = (comentarios) => {

    const colorCircles = ['blue','red', '#f1a110']
    const {comentarios: coments} = comentarios;    

    
    return (
        <>
            <div className="row justContSpaceBet countcoments-conten countcoments-bord-cont">
                <div className="col">
                    <div className="row">
                        {
                            coments.map((e, i) => {
                                return (
                                    (i < colorCircles.length) && <Circle key={e+i} color={colorCircles[i]}/>
                                )
                            })
                        }               
                    </div>

                </div>
                <div className="col countcoments-text">{coments.length} comentarios</div>
            </div>
       </>
    )
}