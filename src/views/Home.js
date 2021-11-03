import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
// import Header from '../components/Header'



const Home = () => {



    return (
        <div className="container box d-flex justify-content-center align-items-center">

            <div><Link to = "/viewcustomer">
                        <Button styleClass="btn btn-primary ms-4" text="View Customer"/>
                    </Link>
                </div>
                <div className="buttonStyle"><Link to ="/createcustomer">
                        <Button styleClass="btn btn-primary ms-4" text="Create Customer"/>
                    </Link>
                </div>
            </div>
    )
}

export default Home

