import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './forgotpass.css'

function Forgotpassword() {
    const [state, setstate] = useState({ email: '' })

    function entering(e) {
        setstate({ ...state, [e.target.name]: e.target.value })
        console.log(state);
    }
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/forgotpassword', state)

            .then((result) => {


                navigate('/login')



            })

            .catch((err) => {
                alert("enter valid email")
                console.log(err);

            })


    }

    return (
        <div >
            <h1>Forgot Password</h1><br />
            <div className='container'>
                <h2>Enter Your emailid</h2>
                <form onSubmit={submit}>
                    <input type='text' placeholder='enter email' name='email' value={state.email} onChange={entering} />


                    <h2>Enter new password</h2>
                    <input type='text' placeholder='new password' name='password' value={state.password} onChange={entering} /><br />
                    <input type="submit"></input>
                </form>
            </div>


        </div>
    )
}

export default Forgotpassword