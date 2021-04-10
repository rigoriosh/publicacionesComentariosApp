import React from 'react'
import Circle from '../utilsComponent/Circle'

export const CountComents = (comentarios) => {
    const colorCircles = ['blue','red', 'yellow']
    const {comentarios: coments} = comentarios;    
    return (
        <>
            <div className="row justContSpaceAround">
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
                <div className="col">{coments.length} comentarios</div>
            </div>
        </>
    )
}
