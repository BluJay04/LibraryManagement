import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewOneProduct() {

    const [api,setApi]=useState([])

    const {id}=useParams()

    const useridfront=localStorage.getItem('userid')
    

    const [state,setstate]=useState({userid:useridfront})

    useEffect(()=>{
        axios.post(`http://localhost:4000/viewid/${id}`)

        .then((result)=>
        {
            console.log(result.data.data);
            setApi(result.data.data)
        })

        .catch((err)=>{
            alert("couldnt be added")
            console.log(err);
        })
    },[])



    const navigate=useNavigate()
    function addcart()
    {
        axios.post(`http://localhost:4000/addtocart/${id}`,state)
        alert("product added successfully")
        navigate('/Home')
        
    }


  return (
    <div>
        <img src={`http://localhost:4000/`+api.productimage?.filename}/><br/>
        
        {api.productname}<br/>
        {api.productauthor}<br/>
        {api.productgenre}<br/>
        {api.productdescription}<br/>
        
        <button class="btn btn-primary" onClick={addcart}>Buy@${api.productprice}</button>

    </div>
  )
}

export default ViewOneProduct