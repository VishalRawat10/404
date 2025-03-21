import React, { useState } from 'react'
import { NavLink } from 'react-router';

function Header() {
    const [navitem,setNavItem]=useState("HOME");
  return <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 "style={{"position":'absolute','box-shadow': '0px 5px #888888'}}>
  <div class="container-fluid">
   <NavLink to={"home"} class="navbar-brand heading" href="#">Horizon Heaven</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#">More</NavLink>
        </li>
      
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
}

export default Header
