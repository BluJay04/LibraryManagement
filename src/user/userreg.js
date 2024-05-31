import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './reg.css'
import axios from 'axios'

function Userreg() {
    const [state,setstate]=useState({name:"",password:"",email:"",date:"",image:""})

    const navigate=useNavigate()

    function updates(e)
    {
      if(e.target.name === "image"){
        // handleImageUpload(e);
        setstate({...state,image:e.target.files[0]});
    } 
    else{
      setstate({...state,[e.target.name]:e.target.value})

    }
        
    }
    console.log(state);

    const submit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:4000/userreg',state,  {
        headers: {
          "Content-Type": "multipart/form-data",
        }})
      .then((result)=>{
        console.log(result)
        if (result.data.status==200)
          {
            alert("successfully registered")
            navigate('/login')

          }
        else
        {
          alert("something went wrong")
        }
        
      })
      .catch((err)=>
      
    {
      console.log(err+"error")
    })

        // 
    }

  return (
    <div id='registration'>
    <div className='container pt-5 text-center'>
        <h1 style={{color:"white    "}}>User Registration</h1>
        <form onSubmit={submit} >
            <input type='text' placeholder='enter your name' onChange={updates} name='name' value={state.name} required/><br/>
            <input type='password' placeholder="enter your password" onChange={updates} name='password' value={state.password} required/><br/>
            <input type='email' placeholder='enter emailid' onChange={updates} name='email' value={state.email} required/><br/>
            <h2 style={{color:'white'}}>enter date of birth</h2><br/>
            <input type='date' onChange={updates} name='date' value={state.date} required/><br/>
            <input type='file' name='image' onChange={updates}/>
            
            {/* enter gender<input type='radio'>male</input><input type='radio'>female</input> */}
           <button type='submit' >sign-up</button>
        </form>
    </div>
    </div>
  )
}

export default Userreg