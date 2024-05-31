import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  const [state,setState]=useState({
    email:'',
    password:''
  })

  const navigate= useNavigate()
  console.log(state)

  const updates=(o)=>{
    setState({...state,[o.target.name]:o.target.value})
  }

  const submit=(o)=>{
    o.preventDefault()
    axios.post('http://localhost:4000/managerlogin',state)
    .then((result)=>{
      if(result.data.status==200){
        alert('Login success')
        navigate('/Home')
      }
    })
    .catch((error)=>{
      alert('Login Failed')
    })
  }

return (
  <form className='background-login text-white' onSubmit={submit}>
    <div className='container ml-3 text-center rounded-1 LoginPage' style={{height:'100vh', width:'450px'}}>
      <h1>LOGIN PAGE</h1><br/>
      <input className='form-control' onChange={updates} name='email' value={state.name} type='text' placeholder='Email@example.com'/><br/>
      <input className='form-control' type='password' onChange={updates} name='password' value={state.password} placeholder='Password'/><br/>   
      <div className='d-flex flex-column SignUp'>
        <button className='btn btn-primary' style={{textDecoration:'none', color:'white'}}>SIGN IN</button>
      </div>   
    </div>
  </form>
)
}

export default LoginPage