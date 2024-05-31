import React from 'react'
import { Link } from 'react-router-dom'

function Profileview() {
    return (
            <div class='card-group pt-5 bg-black' >

                <div class='card bg-black' style={{ borderRadius: '300px', height: '500px' }}>
                    <img src="https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?t=st=1716352602~exp=1716356202~hmac=123e6e2095ecbba222e6aff8a2e354f8b1f675a6e1e06c6ae05a47af2dbb0ee5&w=900" class="card-img" style={{ borderRadius: '300px', height: '500px' }} />


                </div>
                <div class='card bg-black'>
                    <div class="card-body">
                        <h1 class="card-title" style={{ textAlign: 'center', color: 'white' }}>Profile Details</h1>
                        <br />
                        <div class='card-text'>
                            <div class='row'>
                                <div class='col'>
                                    <p class="card-text" style={{ color: 'white' }}>
                                        <h3>username:</h3><br />
                                        <h3>name:</h3><br />
                                        <h3>email-id:</h3><br />
                                        <h3>DOB:</h3><br />
                                    </p>
                                </div>
                                <div class="col">
                                    <p class="card-text" style={{ color: 'white' }}>
                                        <h3>emil_john99</h3><br />
                                        <h3>Emil John</h3><br />
                                        <h3>emil@gmail.com</h3><br />
                                        <h3>04-05-2004</h3><br />
                                    </p>
                                </div>


                            </div>
                            <Link to='/editprofile'><button class='btn btn-primary'>edit profile</button></Link>
                        </div>
                    </div>
                </div>
                <div class='card bg-black'>
                    <h1 class="card-title" style={{ textAlign: 'center', color: 'white' }}>About Me</h1>
                    <p class="card-body" style={{ color: 'white' }}><h2>intrested genre's:</h2> <br />
                        <h3>Horror,Crime,Thriller</h3><br />
                        <h2>More about me:</h2>
                        <form>
                            <textarea style={{ height: "230px", width: '350px' }} />
                            <input type='submit' />
                        </form>



                    </p>

                </div>
            </div>

    )
}

export default Profileview