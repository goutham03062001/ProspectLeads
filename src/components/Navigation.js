import React from 'react'
import "./Navigation.css";
const Navigation = () => {

  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-primary">
  <a class="navbar-brand" href>Prospect Leads</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-5" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    
      <li class="nav-item">
        <a class="nav-link" href="/WhoWeAre">Who We Are</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href id="navbarDropdownMenuLink" data-toggle="dropdown" style = {{color:"white"}}>
          What We Offer
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href>Action</a>
          <a class="dropdown-item" href>Another action</a>
          <a class="dropdown-item" href>Something else here</a>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/testimonials">Testimonials</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/Contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navigation