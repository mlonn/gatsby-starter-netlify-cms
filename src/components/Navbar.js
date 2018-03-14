import React from 'react';
import Link from 'gatsby-link';

import facebook from '../img/facebook-icon.svg';
import logo from '../img/logo.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Ölbruket
        </Link>
   <div class="navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Om
        </Link>
        <Link className="navbar-item" to="/events">
          Arrangemang
        </Link>
        <Link className="navbar-item" to="/news">
          Nyheter
        </Link>
        <Link className="navbar-item" to="/board">
          Styrelsen
        </Link>
        <Link className="navbar-item" to="/documents">
          Document
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.facebook.com/olbruket/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
