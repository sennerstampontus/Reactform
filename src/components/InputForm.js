import React from 'react'
import Button from './Button'
import InputComponents from './InputComponents'
import Header from './Header'
import { Link } from 'react-router-dom'

const InputForm = () => {


    const onClick = (e) => {
        e.preventDefault()
        console.log(e)

        
        
        let testArray = []

        for (let i = 0; i < e.target.length; i++){
            testArray.push(e.target[i])
            console.log(e.target[i])
            if(e.target[i].value === ""){
                document.getElementById("error").innerText = "Lämna inget fält tomt"
                // console.log(e.target[i].value)
            }

            else
                document.getElementById("error").innerText = ""
        }
            
    }


    return (
        <div className="flex-j-center vh-100">
            <div className="box flex-j-center flex-col">
            <div className="text-align-c"><Link to = "/"><i className="fal fa-chevron-circle-left iconStyle m-tb"></i></Link></div>
            <Header headerText="Create Customer"/>
            <form id="form" onSubmit={onClick}  className="buttonStyle p-top-4 text-align-c" noValidate>
                <InputComponents className="formStyle m-lr" id="firstName" type="text" placeholder="First Name"/>
                <InputComponents className="formStyle m-lr" id="lastName" type="text" placeholder="Last Name"/>
                <InputComponents className="styleEmail m-tb" id="email" type="email" placeholder="example@domain.com"/>
                <Button text="Save Customer"/>
                <div id="error" className="mt-1"></div>
            </form>
            </div>
        </div>

    )}

    

export default InputForm
