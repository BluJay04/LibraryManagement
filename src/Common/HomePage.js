import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function HomePage() {
 const[api,setApi]=useState([])
 useEffect(()=>{
 axios.post(`http://localhost:4000/viewall`)
 .then((res)=>{
  console.log(res)
  setApi(res.data.data)
 })
 .catch((err)=>{
  console.log(err)
 })
 },[])

 console.log(api);

  return (
   <div className="container-fluid overflow-hidden bg-dark p-4" >


   <div className="row g-5 d-flex">
    {api.map((a)=>{
      return(
        <div className="container row bg-dark">
          <div className='p-5 pb-3 rounded-3 col-lg-4'>
            <img src={`http://localhost:4000/`+a.productimage?.filename} style={{height:'300px', width:'300px'}} className='rounded-start'></img>
          </div>
          <div style={{textWrap:'wrap', color:'white'}} className='card body col-lg-8 bg-dark p-5 mt-5 rounded-bottom-3'>
            <h5>{a.productname}</h5>
            <h5>{a.productauthor}</h5>
            <h5>{a.productgenre}</h5>
            <p className=''>{a.productdescription}</p>
            <Link to={`/viewproduct/${a._id}`}><button className="btn btn-primary col-2 align-start">Buy ${a.productprice}</button></Link>
          </div>
        </div>
      )
    })}
   </div>
  </div>
  )
}

export default HomePage