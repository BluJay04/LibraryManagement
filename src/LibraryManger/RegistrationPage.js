import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RegistrationPage() {
  const [state,setstate]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirm:''
   
  })

  const navigate=useNavigate()

  function update(e)
    {
      setstate({...state,[e.target.name]:e.target.value})

    }
    console.log(state)

    const submit=(e)=>
      {
        e.preventDefault()
        axios.post('http://localhost:4000/managerregistration',state)

        .then((result)=>{
          if(result.password==result.confirmPassword)
            {
              alert("registration successfull")
            }
          else{
            alert("passwords dont match")
          }
        })

        .catch((err)=>
        {
          console.log(err+"error");
        })


      }

return (
  <form onSubmit={submit}>
    <div className='background-register'>
      <div className='container'>
        <h1 className='register-title text-center'>Registration</h1>
        <div className='row'>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your First Name</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='First Name' name='firstname' value={state.firstname} onChange={update}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your Last Name</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='Last Name' name='lastname' value={state.lastname} onChange={update}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label'>Enter Your Email ID</div>
          <div className='col-4'>
            <input className='form-control' type='text' placeholder='name@example.com' name='email' value={state.email} onChange={update}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label' onChange={update}>Enter Password</div>
          <div className='col-4'>
            <input className='form-control' type='password' placeholder='Password' name='password' value={state.password} onChange={update}></input><br/>
          </div>
          <div class="w-100"></div>
          <div className='col-2 offset-md-3 col-form-label' onChange={update}>Confirm Password</div>
          <div className='col-4'>
            <input className='form-control' type='password' placeholder='Confirm Password' name='confirm' value={state.confirm} onChange={update}></input><br/>
          </div>
          <div className='mt-5 mb-5'>
            <button type='submit' className='col-4 offset-md-4 btn btn-primary'>Sign Up</button>
            <button type='submit' className='col-4 offset-md-4 btn btn-primary'>Sign Up</button>
          </div>        
        </div>
      </div>
    </div>
  </form>
)
}

export default RegistrationPage