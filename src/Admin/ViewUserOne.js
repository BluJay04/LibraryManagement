import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewUserOne() {

 const [state, setState] = useState([])
 const {id}=useParams()

 useEffect(() => {
  axios.post(`http://localhost:4000/viewuser/${id}`)
   .then((res) => {
    console.log(res.data.data)
    setState(res.data.data)
   })
   .catch((err) => {
    console.log(err)
   })
 }, [])

 console.log(state);
const navigate=useNavigate()
const deleteuser=()=>{
  axios.post(`http://localhost:4000/deleteprofile/${id}`)
  .then((result)=>{
   alert('User has been deleted')
   navigate('/Dashboard')
  })
  .catch((error)=>{
   alert('You are a failure.')
  })

 }

 return (
  <div className='d-flex bg-dark' style={{height:'100vh'}}>
   <div class="card col offset-1">
    <img src={`http://localhost:4000/` + state.image?.filename} class="card-img-top" alt="..." />
   </div>
   <div class="card col">
    <div class="card-body">
     <h5 class="card-title">User Info</h5>
     <h6 class="card-subtitle mb-2 text-body-secondary">User ID: {state._id}</h6>
     <p class="card-text">
      Name:{state.name}<br/>
      Email:{state.email}<br/>
      Date:{state.date}<br/>
     </p>
     <button className='btn btn-primary' onClick={deleteuser}>Delete User</button>
    </div>
   </div>
   <div className='offset-1'></div>
  </div>
 )
}

export default ViewUserOne