import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <Link className="nav-link" to='/form'>Register Form</Link>
        </li>
        <li className="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <Link className="nav-link" to='/login'>Login Form</Link>
        </li>
        <li className="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <Link className="nav-link" to='/crud'>Crud</Link>
        </li>
        
      </ul>
      
    </div>
  </nav>
    
    </>
  )
}

export default Nav