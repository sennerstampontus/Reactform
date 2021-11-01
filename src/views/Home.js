import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container flex-center">
            <div>
                <Link to = "/viewcustomer"><button>View customer</button></Link>
                <Link to ="/createcustomer"><button>Create customer</button></Link>
            </div>

        </div>
    )
}

export default Home
