import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({color}) => {
    return (
        <div className="circle" style={{color, backgroundColor:color}}>.</div>
    )
}

Circle.propTypes = {
    color: PropTypes.string.isRequired
}

export default Circle
