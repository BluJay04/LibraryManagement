import React, { useState } from 'react'
// import '..Admin/adm.css'

function Admin() {

  const AdmID=123
  const AdmPass='admin123'

  const [state,setState]=useState({
    adminId:'',
    password:''
  })

  const update=(o)=>{
    setState({...state,[o.target.name]:o.target.value})
  }

  const submit=(o)=>{
    o.preventDefault()
    if(state.adminId==AdmID && state.password==AdmPass){
      alert('Welcome Admin')
    }
    else if(state.adminId!=123){
      alert('Incorrect ID')
    }
    else if(state.password!='admin123'){
      alert('Invalid Password')
    }
  }

  return (
    <div id="admin">
    <div className='container text-center'>
        <h1 style={{color:"white"}}>Admin Login</h1>
        <br/>
        <form style={{paddingLeft:'300px', paddingRight:'300px'}}>
            <input type='number' className='form-control' name='adminId' value={state.adminId} onChange={update} placeholder='enter admin id'/><br/>
            <input type='password' className='form-control' name='password' value={state.password} onChange={update} placeholder='enter password'/><br/>
            <input type='submit' onClick={submit}></input>
        </form>
    </div>
    </div>
  )
}

export default Admin