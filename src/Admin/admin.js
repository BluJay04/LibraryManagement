// import React, { useState } from 'react'
// import './adm.css'
// import { useNavigate } from 'react-router-dom'

// function Admin() {

//   // const [state, setstate] = useState({ adminid: '', password: '' })
//   // function changes(e) {
//   //   setstate({ ...state, [e.target.name]: e.target.value })
//   // }

//   const navigate = useNavigate()

//   // const submit = (e) => {
//   //   e.preventDefault()
//   //   if (state.adminid == 12498 && state.password == 'kingpin') {
//   //     alert("welcome admin")
//   //     navigate('/dashboard')
//   //   }

//   //   else if (state.adminid != 12498) {
//   //     alert("incorrect id")
//   //   }

//   //   else if (state.password != 'kingpin') {
//   //     alert("incorrect password")
//   //   }

//   // }
//   return (
//     <div id="admin">
//       <div className='container text-center'>
//         <h1 style={{ color: "black" }}>Welcome Admin</h1>
//         <br />
//         {/* <form onSubmit={submit}>
//           <input type='number' placeholder='enter admin id' name='adminid' value={state.adminid} onChange={changes} /><br />
//           <input type='password' placeholder='enter password' name='password' value={state.password} onChange={changes} /><br />
//           <input type='submit' />
//         </form> */}
//       </div>
//     </div>
//   )
// }

// export default Admin