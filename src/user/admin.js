import React from 'react'
import './adm.css'

function Admin() {
  return (
    <div id="admin">
    <div className='container text-center'>
        <h1 style={{color:"black"}}>Welcome Admin</h1>
        <br/>
        <form>
            <input type='number' placeholder='enter admin id'/><br/>
            <input type='password' placeholder='enter password'/>
        </form>
    </div>
    </div>
  )
}

export default Admin