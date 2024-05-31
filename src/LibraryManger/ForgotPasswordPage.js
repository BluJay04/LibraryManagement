import axios from 'axios'
import React, { useState } from 'react'

function ForgotPasswordPage() {
 const [state,setState]=useState({email:'',password:''}) 

 const updates=(e)=>{
  setState({...state,[e.target.name]:e.target.value})
 }

 const submit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:4000/forgotpass',state)
  .then((result=>{
   console.log(result)
   alert('Password changed')
  }))
  .catch((error)=>{
   console.log(error)
    alert('Email does not exist')
  })
 }

  console.log(state)

  return (
    <div className='container-fluid'>
     <form className='border p-5' style={{marginTop:'200px', marginBottom:'200px', marginLeft:'200px', marginRight:'0px'}} onSubmit={submit}>
      <input className='form-control' type='text' placeholder='enter your email' name='email' value={state.email} onChange={updates}></input><br/>
      <input className='form-control' type='password' placeholder='enter new password' name='password' value={state.password} onChange={updates}></input><br/>
      <button className='btn btn-primary'>Submit</button>
     </form>
    </div>
  )
}

export default ForgotPasswordPage