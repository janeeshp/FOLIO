import React from 'react';
import logo from './logo.png';
import "./Navbar.css";
const Navbar = () => {
  return (
   <>
   <nav className="nav-wrapper">
    <div className="nav-content">
        <img className="logo" src={logo} alt="JANEESH P" />

        <ul>
        <li>
            <a className="menu-item" href="\Home">Home</a>
        </li>
        <li>
            <a className="menu-item" href="\Skills">Skills</a>
        </li>
        <li>
            <a className="menu-item">Projects</a>
        </li>
        <li>
            <a className="menu-item">Experience</a>
        </li>
        <li>
            <a className="menu-item">Contact</a>
        </li>

        <button className="contact-btn" onClick={() => {alert('Hi Thanks for Showing Interest ')}}>
        Magic
        </button>
        </ul>

         <button className="menu-btn" onClick={()=>{}}>
            <span
                className="material-symbols-oulined"
                style={{ fontSize:"1.8rem"}}
            >
            </span>
        </button>
    </div>
   </nav>
   </>
  )
}

export default Navbar
