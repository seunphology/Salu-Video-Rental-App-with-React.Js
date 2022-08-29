import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = ({user}) => {
    return ( <nav className="navbar navbar-expand-lg bg-light">
    
      <Link className="navbar-brand" to="/">SALU-Video Rentals</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          
            <NavLink className="nav-item nav-link" aria-current="page" to="/movies">Movies</NavLink>
        
          
            <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
          
      
            <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
            {!user && (

            <React.Fragment>
    
            <NavLink className="nav item nav-link" to="/login">Login</NavLink>
    
          
            <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
          
          
        
        </React.Fragment> )}

        {user && (

<React.Fragment>

<NavLink className="nav item nav-link" to="/profile">{user.name}</NavLink>




<NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>



</React.Fragment> )}
         
      </div>
    </div>
  </nav> 
  );
};
 
export default NavBar;