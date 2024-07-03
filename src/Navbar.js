// src/Navbar.js

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
        <img src={logo} alt="app logo" />
      </div>
      <ul className='app-navbar-links'>
        <li className='p__opensans'><a href="/">Home</a></li>
        <li className='p__opensans'><a href="/about">About</a></li>
        <li className='p__opensans'><a href="/quiz">Quiz</a></li>
        <li className='p__opensans'><a href="/awards">Awards</a></li>
        <li className='p__opensans'><a href="/contact">Contact</a></li>
        </ul>
        <li className='p__opensans app-navbar-login'><a href="/login">Login</a></li>
      
      <div className='app-navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app-navbar-smallscreen-overlay'>
            <MdSchool fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
            <ul className='app-navbar-smallscreen-links'>
              <li className='p__opensans'><a href="/">Home</a></li>
              <li className='p__opensans'><a href="/about">About</a></li>
              <li className='p__opensans'><a href="/quiz">Quiz</a></li>
              <li className='p__opensans'><a href="/awards">Awards</a></li>
              <li className='p__opensans'><a href="/contact">Contact</a></li>
              <li className='p__opensans app-navbar-login'><a href="/login">Login</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
