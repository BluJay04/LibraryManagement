import axios from 'axios'
import React, { useState } from 'react'

function RegistrationPage() {
  const [state,setState]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confpass:''
  })
  function get(o){
    setState({...state,[o.target.name]:o.target.value})
   }

  const updates=(o)=>{
    axios.post('http://localhost:4000/managerregistration',state)
  .then((result)=>{
   console.log(result)
   if(result.password==result.confpass){
    alert('Registration Successful')
   }
  })
  .catch((error)=>{
   console.log(error)
    alert('Email does not exist')
  })
  }

  console.log(state)

return (
  <form onSubmit={updates}>
    <div className='background-register'>
      <div className='container'>
        <h1 className='register-title text-center'>Registration</h1>
        <div className='row'>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your First Name</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='First Name'  name='firstname' value={state.firstname} onChange={get} required></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your Last Name</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='Last Name'  name='lastname' value={state.lastname} onChange={get}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your Email ID</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='name@example.com'  name='email' value={state.email} onChange={get}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label' onChange={get}>Enter Password</div>
          <div className='col-4'>
            <input className='form-control' type='password' placeholder='password'  name='password' value={state.password} onChange={get}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label' onChange={get}>Confirm Password</div>
          <div className='col-4'>
            <input className='form-control' type='password' placeholder='Confirm Password'  name='confpass' value={state.confpass} onChange={get}></input><br/>
          </div>
          <div className='mt-5 mb-5'>
            <button type='submit' className='col-4 offset-md-4 btn btn-primary'>Sign Up</button>
          </div>        
        </div>
      </div>
    </div>
  </form>
)
}

export default RegistrationPage