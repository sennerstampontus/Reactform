import React from 'react'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export const CreateCustomer = () => {

   

    return (
        <div className="box container">
            <InputForm />  
            <Link to ="/"><Button styleClass="btn btn-primary  mt-4" text="Back"/></Link> 
        </div>
    )
}
