import React from 'react'
import PropTypes from 'prop-types'
import { Comentario } from './Comentario'

const Comentarios = ({comentarios, comentar, comentario}) => {
    return (
        <div className="border-container">
            { (comentarios.length > 0) && 
                comentarios.map(e => {

                    return <Comentario key={e.id_comentario} comentario = {e}/> 
                }
                )
            }
            { (comentar && <input onChange={(e)=>{comentario(e.target.value)}} //habilita el campo para agregar un comentario al estado actual
            className="input-header border-container" type="text" name="" id="" placeholder="Escribe un comentario"/>)}            
        </div>
    )
}

Comentarios.propTypes = {
    comentarios: PropTypes.array.isRequired,
    comentar: PropTypes.bool.isRequired,
    comentario: PropTypes.func.isRequired
}

export default Comentarios

