import React, { useEffect, useState } from 'react'
import './profilebg.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Profileview() {

    const [api,setApi]=useState([])
    const [data,setdata]=useState([])
    const userid=localStorage.getItem('userid')

    const {id}=useParams()

    useEffect(()=>{
        axios.post(`http://localhost:4000/userinfo/${userid}`)

        .then((result)=>{
            console.log(result.data.data)
            setApi(result.data.data)
        })

        .catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <div>
       
                                 
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
                                    <h3>{api.username}</h3><br/>
                                    <h3>{api.name}</h3><br/>
                                    <h4>{api.email}</h4><br/>
                                    <h6>{api.date}</h6><br/>
                                </p>
                            </div>

                       
                        </div>
                       <Link to='/editprofile'><button class='btn btn-primary'>edit profile</button></Link> 
                        </div>
                    </div>
                </div>
                <div class='card' id='bg'>
                    <h1 class="card-title" style={{textAlign:'center', color:'white'}}>About Me</h1>
                   <p style={{textAlign:'center', color:'white'}}>
                    <h2>More about me:</h2>
                    <form>
                        <textarea style={{height:"230px", width:'350px'}}/>
                        <input type='submit'/>
                    </form>

                

                    </p>

                </div>
            </div>
        </div>
                    
                   

        </div>

    )
}

export default Profileview