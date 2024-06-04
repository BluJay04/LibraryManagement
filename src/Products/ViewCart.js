import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewCart() {
    const [api,setApi]=useState([])
    const userid=localStorage.getItem('userid')
    const [uid,setuid]=useState({uid:userid})
    const {id}=useParams()
    useEffect(()=>
    {
        axios.post(`http://localhost:4000/viewcart/${userid}`)
        .then((result)=>{
            
            console.log(result.data.data)
            setApi(result.data.data)
        })

        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
    
        {
            api.map((a)=>{
                return(
                    <div>
                     
                     {a.productid.productname}<br/>
                     ${a.productid.productprice}

                     
                 
                 </div>
 
                )


            })
        }

    </div>
  )
}

export default ViewCart