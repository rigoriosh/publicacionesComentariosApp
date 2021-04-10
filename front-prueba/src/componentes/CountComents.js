import React from 'react'
import Circle from './utilsComponent/Circle'

export const CountComents = () => {
    const circles = ['blue','red', 'yellow']
    return (
        <>
            <div className="row justContSpaceAround">
                <div className="col">
                    <div className="row">
                        {
                            circles.map(e => {
                                return (

                                    <Circle key={e} color={e}/>
                                )
                            })
                        }

                    {/* <div className="circle blue">.</div>
                    <div className="circle red">.</div>
                    <div className="circle yellow">.</div>   */}                  
                    </div>

                </div>
                <div className="col">{circles.length} comentarios</div>
            </div>
        </>
    )
}
