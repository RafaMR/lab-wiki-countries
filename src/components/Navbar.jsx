import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-blue bg-blue">
      <NavLink to="/" className="navbar-brand">
        LAB - WikiCountries
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              CountriesList
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
