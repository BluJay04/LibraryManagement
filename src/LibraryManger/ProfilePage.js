import React, { useState } from 'react'

function ProfilePage() {
 const[state,setState]=useState({
  Name:'',
  PhoneNo:'',
  Address:'',
  Email:'',
  Section:'',
  ID:'',
 })
 function setProfile(e){
  setState({...state,[e.target.Name]:e.target.value})
 }
  return (
    <div className='bg-dark' style={{height:'100vh'}}>
<div class="d-flex container" style={{height:'90vh', paddingTop:'15vh'}}>
<img src="https://cdn2.f-cdn.com/files/download/42322552/f58f50.jpg" class="card-img-top border border-primary" style={{borderRadius:'50%',width:'280px', height:'280px'}} alt="..."/>
  <div class="card col-4">
    <div class="card-body">
      <h4 class="card-title">Details</h4>
      <p class="card-text row fs-5">
       <div className='col-5'>
        Name:<br/>Phone No:<br/>Address:<br/>Email:<br/>Section:<br/>Manager ID:
       </div>
       <div className='col'>
       <input type='text' class="" style={{border:'none', width:'28vh', height:'3vh'}} onChange={setProfile}></input>
       <input type='text' class="" style={{border:'none', width:'28vh', height:'3vh'}} onChange={setProfile}></input>
       <input type='text' class="" style={{border:'none', width:'28vh', height:'3vh'}} onChange={setProfile}></input>
       <input type='text' class="" style={{border:'none', width:'28vh', height:'3vh'}} onChange={setProfile}></input>
       <input type='text' class="" style={{border:'none', width:'28vh', height:'3vh'}} onChange={setProfile}></input>
       <input type='text' class="" style={{border:'none', width:'28vh', height:'3vh'}} onChange={setProfile}></input>
       <button className='btn btn-primary' type='submit' onClick={setProfile}>Submit</button>
       </div>
      </p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card col-4">
    <div class="card-body">
      <h4 class="card-title">About Me</h4>
      <textarea class="card-text" placeholder='I am a...' style={{border:'none', height:'50vh', width:'53vh'}}></textarea>
      <p class="card-text fs-5">Interested Genres: <input type='text' class="card-text textbox" style={{border:'none', width:'53vh'}}></input></p>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProfilePage