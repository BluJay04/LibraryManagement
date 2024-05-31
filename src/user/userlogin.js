import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './loginpage.css'
import axios from 'axios'



function Userlogin() {

    const [state,setState]=useState({
        email:'',
        password:''
    })

    const updates=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    
    const navigate = useNavigate()

    console.log(state)
    
    const submit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/login',state)
        .then((result)=>{
            console.log(result)
            if(result.data.status==200){
                alert("login successfull")
                navigate('/home')
                }
            else{
                alert('invalid password')
            }
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return (
        <div id='lofinmainclass'>

        <div className='container text-center login-mainclass' >


            <div class="row"
            //  style={{ backgroundColor: 'blue', opacity: 'unset' }}
            >
                <div class="col-12">
                    <h1 style={{color:"black"}}>User login</h1>
                    <form onSubmit={submit}> 
                        <input type='text' placeholder='enter your email' onChange={updates} name='email' value={state.email}/>
                        <br />
                        <br />
                        <input type="password" placeholder='enter password' onChange={updates} name='password' value={state.password}/><br />
                        <button type='submit' class="btn btn-primary">login</button>
                        <br />
                        <h5 style={{color:"black"}}>Not a Member</h5>
                        <Link to="/registration"><button class='btn btn-primary'>sign up</button></Link>
                    </form>
                </div>
            </div>


        </div>
        </div>

    )
}

export default Userlogin