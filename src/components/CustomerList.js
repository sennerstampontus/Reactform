import React, {useState, useEffect} from 'react'
import Customer from './Customer'

const CustomerList = () => {

    const [customerItem, setCustomer] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/Customers")
            const data = await res.json()

            setCustomer(data)
        }
        
        fetchData()
    },[])

  
    return (
        <div  className="row row-cols-2 d-flex justify-content-center">
            {
                customerItem.map(customerItem =><Customer key={customerItem.id} cardTitle={customerItem.firstName + " " + customerItem.lastName} cardDesc={customerItem.email}/>)
            }
            
        </div>
    )
}
console.log()
export default CustomerList
