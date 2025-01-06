import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return<>
  
  <nav  id='navpage'  className="navbar navbar-expand-lg bg-body-tertiary accordion py-4 fixed-top " >
  <div className="container">
    <Link className="navbar-brand text-white text-uppercase fs-2 fw-bold" to="">Start Framework </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bold" aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bold" to="Portfolio">Portfolio</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bold" to="Contact">Contact</NavLink>
        </li>  
      </ul>
    </div>
  </div>
</nav>
  
  </>
  
  
}
