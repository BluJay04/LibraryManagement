import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HomePage() {
 const[api,setApi]=useState([])
 useEffect(()=>{
 axios.get(`https://api.itbook.store/1.0/new`)
 .then((res)=>{
  console.log(res)
  setApi(res.data.books)
 })
 .catch((err)=>{
  console.log(err)
 })
 },[])

 console.log(api);

  return (
   <div className="container-fluid overflow-hidden bg-dark p-4">
   <div className="row g-5 d-flex">
    {api.map((a)=>{
      return(
        <div className="container row bg-dark">
          <div className='p-5 pb-3 rounded-3 col-lg-4'>
            <img src={a.image} style={{height:'300px', width:'300px'}} className='rounded-start'></img>
          </div>
          <div style={{textWrap:'wrap', color:'white'}} className='card body col-lg-8 bg-dark p-5 mt-5 rounded-bottom-3'>
            <h5 className='text-truncate'>{a.title}</h5>
            <p className=''>{a.description}</p>
            <button className="btn btn-primary col-2 align-start">Buy {a.price}</button>
          </div>
        </div>
      )
    })}
   </div>
  </div>
  )
}

export default HomePage