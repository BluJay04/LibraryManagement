import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link } from 'react-router-dom'
import './loginpage.css'



function Userlogin() {




    return (
        <div id='lofinmainclass'>

        <div className='container text-center login-mainclass' >


            <div class="row"
            //  style={{ backgroundColor: 'blue', opacity: 'unset' }}
            >
                <div class="col-12">
                    <h1 style={{color:"black"}}>User login</h1>
                    <form>
                        <input type='text' placeholder='enter your name' />
                        <br />
                        <br />
                        <input type="password" placeholder='enter password'/><br />
                        <button class="btn btn-primary">login</button>
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