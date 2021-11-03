import React from 'react'

const Button = ({styleClass, onClick, text}) => {

    return (
        <button className={styleClass} onClick = {onClick}>{text}</button>
    )
}

export default Button
