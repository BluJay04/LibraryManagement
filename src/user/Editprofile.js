import React, { useState } from 'react'
import './profilebg.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Editprofile() {

    const [state,setstate]=useState({
        username:'',
        name:'',
        email:'',
        date:'',
        radio:''
       

        })

        const userid=localStorage.getItem('userid')
        console.log(userid)
        const navigate=useNavigate()

        function updates(e)
        {
            setstate({...state,[e.target.name]:e.target.value})
            
            console.log(state)

        }
        function submit(e)
        {
            e.preventDefault()

            axios.post(`http://localhost:4000/update/${userid}`,state)

            .then((result)=>{
                alert("saved changes")
                console.log(result);
                navigate(`/userprofile/${userid}`)


            })

            .catch((err)=>{
                alert("please try again")
            })
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
                                    <input type='text' name='username' value={state.username} placeholder='enter user name' onChange={updates}/>
                                    <br/><br/><br/>
                                    <input type='text' name='name' value={state.name} placeholder='enter name' onChange={updates}/>
                                    <br/><br/>
                                    <input type='text' placeholder='enter email-id' name='email' value={state.email} onChange={updates}/>
                                    <br/><br/><br/>
                                    <input type='date' placeholder='enter dob' name='date' value={state.date} onChange={updates}/>
                                </p>
                            </div>

                       
                        </div>
                        <button class='btn btn-primary' onClick={submit}>save changes</button>
                        </div>
                    </div>
                </div>
                <div class='card' id='bg'>
                    <h1 class="card-title" style={{textAlign:'center', color:'white'}}>About Me</h1>
                    <p class="card-body" style={{color:'white'}}><h2>Favourite genre    :</h2> <br/>
                    
                        <input type='radio' name='radio' onChange={updates} value='horror'/>horror &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='sci-fi'/>sci-fi &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='biography'/>biography &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='auto-biography'/>auto-biography &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='fiction'/>fiction &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='non-fiction'/>non-fiction &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='thriller'/>thriller &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='crime'/>crime &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='true-crime'/>true-crime &nbsp;
                        <input type='radio' name='radio' onChange={updates} value='Romance'/>Romance &nbsp;
                    
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