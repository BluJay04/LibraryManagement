import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ViewAllUsers() {

    const [api,setApi]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:4000/viewalluser")
        .then((result)=>
        {
            console.log("all products stored");
            console.log(result.data.data)
            setApi(result.data.data)
        })

        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div>
    {
        api.map((a)=>{
            return(
                <div>
                    <img src={`http://localhost:4000/` +a.image?.filename} /><br/>
                    {a.name}<br/>
                    <Link to={`/viewone/${a._id}`}><button class='btn btn-primary'>View details</button></Link>
                    </div>
            )
        })

    }
    </div>
    
   
  )
}

export default ViewAllUsers