import React from 'react'
// import Button from './Button'
import InputComponents from './InputComponents'
// import Header from './Header'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

const InputForm = () => {

    return (
        <form className="grid grid-fr4">
            <InputComponents id="firstName" type="text" placeholder="First Name"/>
            <InputComponents id="lastName" type="text" placeholder="Last Name"/>
            <InputComponents id="email" type="email" placeholder="Email"/>
        </form>
    )}

    

export default InputForm
