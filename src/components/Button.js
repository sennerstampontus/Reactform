import React from 'react'

const Button = ({onClick, text}) => {

    return (
        <button onClick = {onClick} className="buttonStyle">{text}</button>
    )
}

export default Button
