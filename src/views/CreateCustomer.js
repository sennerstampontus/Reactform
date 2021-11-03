import React from 'react'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export const CreateCustomer = () => {

   

    return (
        <div className="mt-5 box container">
            <InputForm />  
            <Link to ="/"><Button styleClass="btn btn-primary  mt-4" text="Back"/></Link> 
            <div className="d-flex justify-content-center text-danger fs-3"></div>
        </div>
    )
}
