import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/circle.css'

const Circle = ({color}) => {
    
    return (
        <div className="countcoments-conten__circle">
            <div className="circle" style={{color, backgroundColor:color}}>.</div>
        </div>
    )
}

Circle.propTypes = {
    color: PropTypes.string.isRequired
}

export default Circle
