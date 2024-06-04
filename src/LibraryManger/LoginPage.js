import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'





function LoginPage() {
  const [state,setstate]=useState({email:'',password:''})

  function update(e)
  {
    setstate({...state,[e.target.name]:e.target.value})

  }

  console.log(state);
  const navigate=useNavigate()

  const check=(e)=>
  {
    e.preventDefault()
    axios.post('http://localhost:4000/managerlogin',state)

    .then((result)=>
    {
      if(result.data.status==200)
        {
          alert('login successfull')
          navigate('/managerdashboard')
        }

      else{
        alert('invalid credentials')
      }
    })

    .catch((err)=>
    {
      alert("invalid email")
    })

  }



return (
  <form className='background-login text-white'>
    <div className='container ml-3 text-center rounded-1 LoginPage' style={{height:'100vh', width:'450px'}}>
      <h1>LOGIN PAGE</h1><br/>
      <input className='form-control' type='text' placeholder='Enter email' name='email' value={state.email} onChange={update}/><br/>
      <input className='form-control' type='password' placeholder='Password' name='password' value={state.password} onChange={update}/><br/>   
      <div className='d-flex flex-column SignUp'>
        <button className='btn btn-primary' style={{textDecoration:'none', color:'white'}} onClick={check}>SIGN IN</button><br/>
        <small>Not a member yet?</small>
        <Link to={`/Mngr/Registration`}>Sign Up</Link>
      </div>   
    </div>
  </form>
)
}

export default LoginPage