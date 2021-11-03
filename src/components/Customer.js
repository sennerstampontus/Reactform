import React from 'react'
import placeholder from '../img/placeholder.png'

const Customer = ({id, cardTitle, cardDesc}) => {

    return (

        // <li className="list-group-item">{cardTitle}</li>
    <div className="card mb-3" style={{maxWidth: 540 + 'px'}}>
        <div className="row g-0">
            <div className="col-md-3">
                <img src={placeholder} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div id={id} className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardDesc}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Customer
