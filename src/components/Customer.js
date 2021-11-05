import React from 'react'
import placeholder from '../img/placeholder.png'

const Customer = ({id, cardTitle, cardDesc}) => {

   

    return (

        // <li className="list-group-item">{cardTitle}</li>
    <div id="card" className="card mb-3 me-3 bg-light bg-gradient " style={{maxWidth: 500 + 'px'}}>
        <div className="row border-bg">
            <div className="col mt-2">
                <img src={placeholder} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-9">
                <div id={id} className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardDesc}</p>
                    <div className="d-flex justify-content-end "><i className="fab fa-react awsIcon"></i></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Customer
