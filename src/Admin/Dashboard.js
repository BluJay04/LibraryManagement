import React from 'react'
import '../Admin/Dashboard.css'


function Dashboard() {
 return (
  <div className='flex bg-dark' style={{ height: '93vh' }}>
   <div className='d-flex' style={{ height: '43.25vh', paddingTop: '80px', paddingLeft: '50px' }}>
    <div class="card text-bg-danger m-3 col" style={{ maxWidth: '10rem' }}>
     <div className='btn card-img-overlay img-manager'>
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}>Managers</div>
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
     <div className='btn card-img-overlay img-sales' type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}>Total Sales</div>
     </div>
    </div>
    <div className='col m-3' style={{}}>
     <div style={{}}>
      <div class="collapse collapse-horizontal" id="collapseWidthExample">
       <div class="card card-body" style={{ width: '370px', height:'435px', textAlign:'center', paddingTop:'200px' }}>
        Not yet implemented
       </div>
      </div>
     </div>
    </div>
   </div>
   {/* <div className='d-flex' style={{ height: '43.25vh', paddingLeft: '50px' }}>
    <div class="btn bg-secondary card m-3 col-4" style={{ maxWidth: '22rem' }}>
     <div className='card-img-overlay img-shelf'>
      <div class="bg-transparent" style={{ marginTop: '167px'}}>
       <div class="progress" style={{width:'18.5rem'}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-warning text-dark" style={{width: '75%'}}>75%</div>
       </div>
      </div>
     </div>
    </div>
    <div class="btn bg-secondary card m-3 col-4" style={{ maxWidth: '22rem' }}>
     <div className='card-img-overlay'>
      <div class="bg-transparent" style={{ marginTop: '120px', marginLeft: '8px' }}></div>
     </div>
    </div>
   </div> */}
  </div>
 )
}

export default Dashboard