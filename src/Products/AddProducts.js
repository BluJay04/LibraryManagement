import React, { useState } from 'react'

function AddProducts() {
 const [state,setState]=useState({
  name:'',
  price:'',
  author:'',
  genre:'',
  image:'',
  description:''
 })
  return (
   <div className='bg-dark d-flex' style={{height:'100vh'}}>
    <form className='pt-5 px-5 offset-lg-6 col-6' style={{width:'600px'}}>
     <input type='text' className='form-control mt-3' placeholder='Product Name' name='name' value={state.name}></input>
     <input type='text' className='form-control mt-3' placeholder='Product Price' name='price' value={state.price}></input>
     <input type='text' className='form-control mt-3' placeholder='Author ' name='author' value={state.author}></input>
     <input type='text' className='form-control mt-3' placeholder='Genre' name='genre' value={state.genre}></input>
     <input type='file' className='form-control mt-3' placeholder='Image' name='image' value={state.image}></input>
     <textarea className='form-control mt-3' placeholder='Enter a brief description' name='description' value={state.description} style={{height:'35vh'}}></textarea>
    </form>
    </div>
  )
}

export default AddProducts