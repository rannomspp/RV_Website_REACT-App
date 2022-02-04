import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({isDropDownMenuOpen, openDropDownMenu}) => {
  return <>
  <nav className="navbar">
  <div className="nav-bar-logo">
      <h1><NavLink className="navlink" to="/RV_Website_REACT-App">RANNOVISUALS</NavLink></h1>
  </div>
  <a href="#" className="toggle-button" onClick={openDropDownMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
  </a>
  <div className={isDropDownMenuOpen ? "navbar-links" : "navbar-links active"}>
      <ul>
          <li><NavLink className="navlink" to="/work">Work</NavLink></li>
          <li><NavLink className="navlink" to="/aboutme">About Me</NavLink></li>
          <li><NavLink className="navlink" to="/contact">Contact</NavLink></li>
      </ul>
  </div>
  </nav>
  <hr />
  </>;
};

export default Navbar;
