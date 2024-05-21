import React, { useState } from 'react'

function RegistrationPage() {
  const [state,setstate]=useState({
    firstName:'',
    lastName:'',
    emailID:'',
    password:'',
    confirmPassword:''
  })

return (
  <div>
    <div className='background-register'>
      <div className='container'>
        <h1 className='register-title text-center'>Registration</h1>
        <div className='row'>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your First Name</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='First Name'></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your Last Name</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='Last Name'></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your Email ID</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='name@example.com'></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Password</div>
          <div className='col-4'>
            <input className='form-control' type='password' placeholder='Password'></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Confirm Password</div>
          <div className='col-4'>
            <input className='form-control' type='password' placeholder='Confirm Password'></input><br/>
          </div>
          <div className='mt-5 mb-5'>
            <button className='col-4 offset-md-4 btn btn-primary'>Sign Up</button>
          </div>        
        </div>
      </div>
    </div>
  </div>
)
}

export default RegistrationPage