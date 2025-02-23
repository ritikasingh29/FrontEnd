import React from 'react';
import './Navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Navbar Toggler Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">Home</a>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="navbar-brand" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/About Us">Contact Us</a>
            </li>
          </ul>

          {/* Login and Register Buttons */}
          <div className="d-flex">
            <a className="btn btn-outline-primary me-2" href="/login">Login</a>
            <a className="btn btn-black btn-shiny" href="/register">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
