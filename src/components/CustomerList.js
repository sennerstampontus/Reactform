import React, {useState} from 'react'
import Customer from './Customer'

const CustomerList = () => {

    const [customerItem, setCustomer] = useState([
    {
        firstName: "Pontus",
        lastName: "Sennerstam",
        email: "sennerstam.pontus@gmail.com"
            
    }
    ])

    return (
        <ul className="list-group">
            {
                customerItem.map(customerItem =><Customer cardTitle={customerItem.firstName + " " + customerItem.lastName} cardDesc={customerItem.email} />)
            }
            
        </ul>
    )
}

export default CustomerList
