import './styles.css'

import React from 'react'
import P from 'prop-types'

export const Button = ({text, onClick, disabled = false}) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className="button"
    >
        {text}
    </button>
)

Button.defaultProps = {
    disabled: false
}

Button.propTypes = {
    text: P.string.isRequired,
    onClick: P.func.isRequired,
    disabled: P.bool
}
