import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
return (
  <div className='background-login text-white'>
    <div className='container ml-3 text-center rounded-1 LoginPage' style={{height:'100vh', width:'450px'}}>
      <h1>LOGIN PAGE</h1><br/>
      <input className='form-control' type='text' placeholder='Username'/><br/>
      <input className='form-control' type='password' placeholder='Password'/><br/>   
      <div className='d-flex flex-column SignUp'>
        <button className='btn btn-primary'><Link to={'/Home'} style={{textDecoration:'none', color:'white'}}>SIGN IN</Link></button><br/>
        <small>Not a member yet?</small>
        <Link to={`/Mngr/Registration`}>Sign Up</Link>
      </div>   
    </div>
  </div>
)
}

export default LoginPage