// import React, {useState, useEffect} from 'react'
import Button from './Button'
import InputComponents from './InputComponents'
// import Header from './Header'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

const InputForm = () => {

    const onSubmit = (e) =>{
        e.preventDefault()
        let fieldArray = []

        for (let i = 0; i < e.target.length - 1; i++) {
            fieldArray.push(e.target[i])

            const letterRegEx = /[a-ö]{2,}/.exec(`${e.target[i].value}`);
            const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.exec(`${e.target[i].value}`);

                if(e.target[i].type === 'text' && !letterRegEx){

                e.target[i].classList.add("is-invalid")
            }

            else if(e.target[i].type === 'email' && !emailRegEx){
                e.target[i].classList.add("is-invalid")
            }

            else {
                e.target[i].classList.replace("is-invalid", "is-valid")
            }
        }

        let checkArray =  fieldArray.map((element)=>{
      
            return (element.classList.contains("is-invalid"))
          })

          let isInvalid = checkArray.includes(true)
      
          if(!isInvalid){
            alert('Customer Saved')
              
            let json = JSON.stringify({ firstName: `${fieldArray[0].value}`, lastName: `${fieldArray[1].value}`, email: `${fieldArray[2].value}` })

            async function fetchData() {
                await fetch('https://ecexam-webapi.azurewebsites.net/api/Customers', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'post',
                    body: json
                })
            }

            fetchData()
              fieldArray.forEach((element) =>{
                  element.value=""
                  element.classList.remove("is-valid")
                //   SubmitError.innerText = ""
              })
            } 
    }

    return (
        <form onSubmit={onSubmit} className="grid grid-fr4" noValidate>
            <InputComponents id="firstName" inputType="text" placeholder="First Name"/>
            <InputComponents id="lastName" inputType="text" placeholder="Last Name"/>
            <InputComponents id="email" inputType="email" placeholder="Email"/>
            <Button styleClass="btn btn-primary mt-4" text="Save Customer" />
        </form>
    )
}
export default InputForm
