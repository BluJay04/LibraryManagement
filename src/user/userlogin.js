import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link, useNavigate } from 'react-router-dom'
import './loginpage.css'
import axios from 'axios'



function Userlogin() {

    const [state, setstate] = useState({ email: '', password: '' })

    const navigate = useNavigate();

    function changefn(e) {
        setstate({ ...state, [e.target.name]: e.target.value })
        
    
    }
    console.log(state);

    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/login', state)

            .then((result) => {
                console.log(result);
                if(result.data.status==200)
                    {
                        localStorage.setItem("userid",result.data.data._id)
                        console.log(result.data.data._id);
                        navigate('/home')

                    }
                
                else if(result.data.status==409)
                    {
                        alert("invalid password")
                    }
                
                else if(result.data.status==500)
                    {
                        alert("invalid email id")
                    }

            })

            .catch((err) => {
                console.log(err + "error");
            })

        
    }




    return (
        <div id='lofinmainclass'>

            <div className='container text-center login-mainclass' >


                <div class="row"
                //  style={{ backgroundColor: 'blue', opacity: 'unset' }}
                >
                    <div class="col-12">
                        <h1 style={{ color: "black" }} >User login</h1>
                        <form onSubmit={submit}>
                           
                            <input type='text' placeholder='enter your email' name='email' value={state.email} onChange={changefn}  required />
                            <br />
                            <br />
                            <input type="password" placeholder='enter password' name='password' value={state.password} onChange={changefn}  required /><br />
                            <input type='submit' value={'login'} />
                            <br />
                            <h5 style={{ color: "black" }}>Not a Member</h5>
                            <Link to="/registration"><button class='btn btn-primary'>sign up</button></Link>
                        </form>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Userlogin