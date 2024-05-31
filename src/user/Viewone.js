import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Viewone() {
    const [api,setApi]=useState([])

    const {id}=useParams();
    console.log(id);

    useEffect(()=>{
        axios.post(`http://localhost:4000/userinfo/${id}`)

        .then((result)=>{
            console.log(result.data.data);
            setApi(result.data.data)
        })
    },[])

    const navigate=useNavigate()

    function deleteuser()
    {
        axios.post(`http://localhost:4000/deleteprofile/${id}`)

        .then((res)=>
        {
            alert("profile deleted from database")
            navigate('/viewallusers')
        })

        .catch((err)=>{
            alert("user couldnt be deletd")
        })
    }
  return (
    <div>
        <img src={`http://localhost:4000/`+api.image?.filename}/><br/>
        {api.name}<br/>
        {api.email}<br/>
        {api.date}<br/>
        <button class="btn btn-primary" onClick={deleteuser}>delete user</button>

    </div>
  )
}

export default Viewone