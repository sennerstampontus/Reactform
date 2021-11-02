import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'



const Home = () => {



    return (
        <div className="flex-j-center vh-100 border">
            <div className="box flex-j-center flex-col">
            <Header headerText="Customer Portal"/>
            <div className="buttonStyle p-top-4">
            
            <Link to = "/viewcustomer">
                <Button text="View Customer"/>
            </Link>
            <Link to ="/createcustomer">
                <Button text="Create Customer"/>
            </Link>
        </div>
            </div>
        </div>
    )
}

export default Home

