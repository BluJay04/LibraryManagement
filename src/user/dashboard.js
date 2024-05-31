import React from 'react'

function Dashboard() {
  return (
    <div>
        <h1>Welcome Admin</h1>
        <div class="row g-4 ">
  <div class="col-3">
    <div class="card" style={{maxWidth:'15rem'}}>
        <div class="row">
            <div class="col">
      <img src="https://img.freepik.com/free-vector/shopping-cart-vector-technology-icon-silver-gradient-background_53876-112159.jpg?t=st=1716960542~exp=1716964142~hmac=ccd52dfea27cc6daa392ea00556080bfebb8c8897796ab4f0f4a7908b4f41480&w=740" class="card-img" alt="..."/>
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <a href='/addproducts' class="card-title" style={{fontSize:'18px'}}>Add products</a>
       
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="col-3">
    <div class="card" style={{maxWidth:'15rem'}}>
        <div class="row">
            <div class="col">
      <img src="https://img.freepik.com/free-vector/group-businessmen-avatar-character_24877-57310.jpg?t=st=1716960485~exp=1716964085~hmac=8becb61c0053f77def7f49e3abe089a12a41488de3c0559f0d92b61c8e1df21d&w=900" class="card-img"  alt="..."/>
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{fontSize:'16px'}}>View Managers</h5>
       
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="col-3">
    <div class="card" style={{maxWidth:'15rem'}}>
        <div class="row">
            <div class="col">
      <img src="https://img.freepik.com/premium-vector/683752401_473851-84.jpg?w=740" class="card-img" alt="..."/>
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <a href='/viewallusers' class="card-title" style={{fontSize:'18px'}}>View Users</a>
       
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="col-3">
    <div class="card" style={{maxWidth:'15rem'}}>
        <div class="row">
            <div class="col">
      <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?t=st=1716960391~exp=1716963991~hmac=04a64e0c8b3389dc75584e42a63e362685004dae30f359badbcd6dd94dc2a74a&w=740" class="card-img" alt="..."/>
      </div>
      <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{fontSize:'18px'}}>view products</h5>
       
      </div>
    </div>
  </div>
  </div>
  </div>
        </div>

    <div class="rows g-1">
        <div class="card-group">
        <div class="card" >
        <div class='cols-6'>
        
  <img src="https://img.freepik.com/free-photo/smiling-hr-employer-handshaking-successful-job-applicant-hiring-greeting_1163-4102.jpg?t=st=1716962764~exp=1716966364~hmac=ee7f7b4163f20f4279560404b792266ebd5f3a95b9626c0f1e900eef8e9a7c01&w=900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:'25px',textAlign:'center'}}>Add Managers</h5>
    
    
  </div>
</div>


        </div>
        <div class="card">
        <div class='cols-6'>
        
  <img src="https://img.freepik.com/free-vector/lying-arrow-concept-illustration_114360-8531.jpg?t=st=1716963225~exp=1716966825~hmac=92cb9dc733973b606161e5233ac2fd29536d7090c089019302650779704ee163&w=740" style={{height:'425px'}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" style={{fontSize:'25px',textAlign:'center'}}>View Sales</h5>
    
  </div>
</div>
        </div>
    </div>
    </div>
        </div>
  )
}

export default Dashboard