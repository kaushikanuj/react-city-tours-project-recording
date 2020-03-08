import React from 'react';
import logo from "../../logo.svg"
import './navbar.scss'

const Navbar =()=>{
    return(
       <div>
           <nav className="navbar">
            <img src={logo} alt="city tour company" /> 
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link active">Tour</a></li>
            </ul>
           </nav>
       </div>
    );
}
export default Navbar;