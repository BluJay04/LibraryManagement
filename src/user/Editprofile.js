import React, { useState } from 'react'
import './profilebg.css'
import { Link } from 'react-router-dom'

function Editprofile() {

    const [state,setstate]=useState({
        username:'',
        name:'',
        email:'',
        dob:'',
        radio:[]
        })

        function updates(e)
        {
            setstate({...state,[e.target.username]:e.target.value})
        }
  return (
    
    <div id='bg'>
        
        
        <br/>
        <div class='card-group pt-5' >

            <div class='card' style={{borderRadius:'300px',height:'500px'}}>
                <img src="https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?t=st=1716352602~exp=1716356202~hmac=123e6e2095ecbba222e6aff8a2e354f8b1f675a6e1e06c6ae05a47af2dbb0ee5&w=900" class="card-img" style={{borderRadius:'300px',height:'500px'}}/>

               
            </div>
            <div class='card' id='bg'>
                <div class="card-body">
                    <h1 class="card-title" style={{textAlign:'center',color:'white'}}>Profile Details</h1>
                    <br/>
                    <div class='card-text'>
                    <div class='row'>
                        <div class='col'>
                            <p class="card-text" style={{color:'white'}}>
                                <h3>username:</h3><br/>
                                <h3>name:</h3><br/>
                                <h3>email-id:</h3><br/>
                                <h3>DOB:</h3><br/>
                            </p>
                            </div>
                            <div class="col">
                                <p class="card-text" style={{color:'white'}}>
                                    <input type='text' placeholder='enter user name' onChange={updates}/>
                                    <br/><br/><br/>
                                    <input type='text' placeholder='enter name' onChange={updates}/>
                                    <br/><br/>
                                    <input type='text' placeholder='enter email-id' onChange={updates}/>
                                    <br/><br/><br/>
                                    <input type='date' placeholder='enter dob' onChange={updates}/>
                                </p>
                            </div>

                       
                        </div>
                        <Link to='/userprofile'><button class='btn btn-primary'>save changes</button></Link>
                        </div>
                    </div>
                </div>
                <div class='card' id='bg'>
                    <h1 class="card-title" style={{textAlign:'center', color:'white'}}>About Me</h1>
                    <p class="card-body" style={{color:'white'}}><h2>intrested genre's:</h2> <br/>
                    <form>
                        <input type='radio' value={'horror'}/>horror &nbsp;
                        <input type='radio' value={'sci-fi'}/>sci-fi &nbsp;
                        <input type='radio' value={'biography'}/>biography &nbsp;
                        <input type='radio' value={'auto-biography'}/>auto-biography &nbsp;
                        <input type='radio' value={'fiction'}/>fiction &nbsp;
                        <input type='radio' value={'non-fiction'}/>non-fiction &nbsp;
                        <input type='radio' value={'thriller'}/>thriller &nbsp;
                        <input type='radio' value={'crime'}/>crime &nbsp;
                        <input type='radio' value={'true-crime'}/>true-crime &nbsp;
                        <input type='radio' value={'Romance'}/>Romance &nbsp;
                    </form>
                    <h2>More about me:</h2>
                    <form>
                        <textarea style={{height:"230px", width:'350px'}}/>
                        
                    </form>

                

                    </p>

                </div>
            </div>
        </div>
    
  )
}

export default Editprofile