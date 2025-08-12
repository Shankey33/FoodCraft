import "./Navbar.css";
import React from 'react'
import logo from '../../assets/logo.png';

const Navbar = () => {
  
    return (

    <div className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="Logo"/>
        </div>
    </div>
  )
}

export default Navbar
