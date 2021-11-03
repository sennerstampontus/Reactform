import React, {useState, useEffect} from 'react'
import Customer from './Customer'

const CustomerList = () => {

    const [customerItem, setCustomer] = useState([])

    useEffect(()=>{
        fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
        .then(res => res.json())
        .then(data => setCustomer(data))
    },[])

    return (
        <ul className="list-group">
            {
                customerItem.map(customerItem =><Customer key={customerItem.id} cardTitle={customerItem.firstName + " " + customerItem.lastName} cardDesc={customerItem.email} />)
            }
            
        </ul>
    )
}

export default CustomerList
