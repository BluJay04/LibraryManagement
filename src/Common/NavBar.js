import React from 'react'

function NavBar() {
  return (
   <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div class="container-fluid">
      <a class="navbar-brand" href="#!">LibbY</a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#!">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Feedback</a>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
             <i class="ri-shopping-cart-line"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
             <i class="ri-twitter-x-line"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
              <i class="ri-instagram-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar