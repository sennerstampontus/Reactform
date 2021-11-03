import React from 'react'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export const CreateCustomer = () => {

    const onClick = () =>{
        console.log('click')
    }

    return (
        <div className="box container">
            <InputForm />
            <Button styleClass="btn btn-primary" text="Save Customer" onClick={onClick}/>
            <Link to ="/"><Button styleClass="btn btn-primary ms-4" text="Back"/></Link>
        </div>
    )
}
