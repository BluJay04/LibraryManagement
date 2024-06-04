import React from 'react'

function ManagerDashboard() {
  return (
   <div className='flex bg-dark' style={{ height: '100vh' }}>
   <div className='d-flex' style={{ height: '43.25vh', paddingTop: '80px', paddingLeft: '50px' }}>
    <div class="card text-bg-danger m-3 col" style={{ maxWidth: '10rem' }}>
     <div className='btn card-img-overlay img-fluid img-manager' data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}>View Profile</div>
     </div>
    </div>
    <div class="card text-bg-success m-3 col" style={{ maxWidth: '10rem' }}>
     <div className='btn card-img-overlay img-user'>
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}>Users</div>
     </div>
    </div>
    <div class="card text-bg-primary m-3 col" style={{ maxWidth: '10rem' }}>
     <div className='btn card-img-overlay img-products'>
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}>Add Books</div>
     </div>
    </div>
    <div class="card text-bg-warning m-3 col" style={{ maxWidth: '10rem' }}>
     <div className='btn card-img-overlay img-sales' type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}>Total Sales</div>
     </div>
    </div>
    <div className='col m-3' style={{}}>
     <div style={{}}>
      <div class="collapse collapse-horizontal" id="collapse1">
       <div class="card card-body" style={{ width: '370px', height:'435px', textAlign:'center', paddingTop:'200px' }}>
        Manager Profile
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className='d-flex' style={{ height: '43.25vh', paddingLeft: '50px' }}>
   <div className='col m-3' style={{}}>
     <div style={{}}>
      <div class="collapse collapse-horizontal" id="collapse2">
       <div class="card card-body" style={{ width: '735px', height:'242px', textAlign:'center', paddingTop:'100px' }}>
        Sales Graph
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  )
}

export default ManagerDashboard
