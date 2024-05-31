import axios from 'axios'
import React, { useState } from 'react'

function Addproducts() {

    const [state,setstate]=useState({name:'',price:'',author:'',genre:'',description:'',productimage:''})

    function updates(e)
    {
        if(e.target.name === "productimage"){
          // handleImageUpload(e);
          setstate({...state,productimage:e.target.files[0]});
      } 
      else{
        setstate({...state,[e.target.name]:e.target.value})
  
      }
    }

    const submit=(e)=>
        {
            e.preventDefault()

            axios.post('http://localhost:4000/productreg',state,{
                headers: {
                  "Content-Type": "multipart/form-data",
                }})

            .then((result)=>
            {
                alert('product added')
            })

            .catch((err)=>
            {
                alert('coudlnt be added')
            })
        }
  return (
    <form style={{textAlign:'center'}} onSubmit={submit}>
        <h1>Enter product Details</h1>
        <br/>
        <input type='text' placeholder='enter product name' name='name' value={state.name} onChange={updates}/><br/>
        <input type='number' placeholder='enter price' name='price' value={state.price} onChange={updates}/><br/>
        <input type='text' placeholder='enter author name' name='author' value={state.author} onChange={updates}/><br/>
        <input type='text' placeholder='enter genre' name='genre' value={state.genre} onChange={updates}/><br/>
        <input type='text' placeholder='description' name='description' value={state.description} onChange={updates}/><br/>
        <input type='file' name='productimage' onChange={updates}/><br/>
        <button type='submit' class='btn btn-primary'>submit</button>

    </form>
  )
}

export default Addproducts