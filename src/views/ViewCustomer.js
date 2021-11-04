import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CustomerList from '../components/CustomerList'
import HeadTitle from '../components/HeadTitle'

const ViewCustomer = () => {

    
    return (
        <div className="container mt-5 box">
            <HeadTitle TitleText="View Customer"/>
            <div className="d-flex justify-content-center"><CustomerList /></div>
            <div className="mt-4 d-flex container ">
                <Link to ="/"><Button styleClass="btn btn-primary" text="Back"/></Link>
            </div>
        </div>
    )
    
}

export default ViewCustomer
