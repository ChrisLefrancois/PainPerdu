import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" class="logo">Au Pain Perdu </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Our Menu</Link>
        <Link to="/about">Find Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
