import "./Navbar.css";
import React from 'react'
import logo from '../../assets/logo.png';

const Navbar = () => {
  
    return (

    <div className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="Logo"/>
        </div>
        <ul className="navbar-links">
                <li>Home</li>
                    <li style={{
                        marginRight: "20px",
                    }}>Sign-In</li>
        </ul>
    </div>
  )
}

export default Navbar
