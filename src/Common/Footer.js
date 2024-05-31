import React from 'react'

function Footer() {
  return (
   <footer class="text-center text-lg-start background-footer">
   <div class="container d-flex justify-content-center py-5">
     <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 logo-footer">
       <i class="fab fa-facebook-f"></i>
     </button>
     <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 logo-footer">
       <i class="fab fa-youtube"></i>
     </button>
     <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 logo-footer">
       <i class="fab fa-instagram"></i>
     </button>
     <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 logo-footer">
       <i class="fab fa-twitter"></i>
     </button>
   </div>
   <div class="text-center text-white p-3 color-footer">
     © 2020 Copyright:
     <a class=''>LibbY</a>
   </div>
 </footer>
  )
}

export default Footer