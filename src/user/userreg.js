import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './reg.css'

function Userreg() {
    const [state,setstate]=useState({name:"",password:"",emailid:"",date:""})

    const navigate=useNavigate()

    function updates(e)
    {
        setstate({...state,[e.target.name]:e.target.value})
    }

    const submit=()=>{
        navigate('/login')
    }

  return (
    <div id='registration'>
    <div className='container pt-5 text-center'>
        <h1 style={{color:"white    "}}>User Registration</h1>
        <form onSubmit={submit} >
            <input type='text' placeholder='enter your name' onChange={updates} required/><br/>
            <input type='password' placeholder="enter your password" onChange={updates} required/><br/>
            <input type='email' placeholder='enter emailid' onChange={updates} required/><br/>
            <h2 style={{color:'white'}}>enter date of birth</h2><br/>
            <input type='date' onChange={updates} required/><br/>
            
            {/* enter gender<input type='radio'>male</input><input type='radio'>female</input> */}
           <button type='submit' >sign-up</button>
        </form>
    </div>
    </div>
  )
}

export default Userreg