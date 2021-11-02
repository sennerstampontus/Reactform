import React from 'react'

const InputComponents = ({className, id, type, placeholder}) => {
    return (
        <input className={className} id={id} type={type} placeholder={placeholder} />
    )
}

export default InputComponents
