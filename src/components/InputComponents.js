import React from 'react'

const InputComponents = ({id, inputType, placeholder}) => {
    return (
        <>
            <div className="mb-3 d-f color-white">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{placeholder}</label>
                <input type={inputType} className="form-control" id={id} rows="3" />
            </div>
        </>
    )
}

export default InputComponents
