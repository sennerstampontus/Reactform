import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import HeadTitle from '../components/HeadTitle'
// import Header from '../components/Header'



const Home = () => {



    return (
        <div className="mt-5 container box d-flex flex-column">
            <HeadTitle TitleText="Admin Portal"/>
                <div className="d-flex justify-content-center mt-5 color-white fs-1">
                    <Link to = "/viewcustomer">
                        <Button styleClass="btn btn-primary ms-4" text="View Customer"/>
                    </Link>
                    <Link to ="/createcustomer">
                        <Button styleClass="btn btn-primary ms-4" text="Create Customer"/>
                    </Link>
                </div>
            </div>
    )
}

export default Home

