import React from 'react'
import Button from './Button'
import InputComponents from './InputComponents'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FormBg from './FormBg'

// const InputForm = ({}) => {


    // const onClick = (e) => {
    //     e.preventDefault()
    //     console.log(e)

        
        
    //     let testArray = []

    //     for (let i = 0; i < e.target.length; i++){
    //         testArray.push(e.target[i])
    //         console.log(e.target[i])
    //         if(e.target[i].value === ""){
    //             document.getElementById("error").innerText = "Lämna inget fält tomt"
    //             // console.log(e.target[i].value)
    //         }

    //         else
    //             document.getElementById("error").innerText = ""
    //     }
            
    // }

    function MyControlledInput() {
        const [value, setValue] = useState("");
      
        const onChange = (event) => {
          setValue(event.target.value);
        };

    return (
        <form className="grid grid-fr4">
            <div className="grid grid-fr3 col-2"><FormBg />
            <InputComponents />
            </div>
        </form>
    )}

    

export default MyControlledInput
