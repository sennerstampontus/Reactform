import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
// import Header from '../components/Header'



const Home = () => {



    return (
        <div className="mt-5 container box d-flex flex-column">
            <div className="d-flex justify-content-center mb-5 color-white fs-1">Customer Portal</div>
            <div>
            
            <div className="d-flex justify-content-center mt-5 color-white fs-1">
                    <Link to = "/viewcustomer">
                        <Button styleClass="btn btn-primary ms-4" text="View Customer"/>
                    </Link>
                    <Link to ="/createcustomer">
                        <Button styleClass="btn btn-primary ms-4" text="Create Customer"/>
                    </Link>
                </div>
            </div>

            </div>
    )
}

export default Home

