import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'; 
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation(); 

  return (
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
        <img src={logo} alt="app logo" />
      </div>
      <ul className='app-navbar-links'>
        <li className='p__opensans'><Link to="/">Home</Link></li>
        <li className='p__opensans'><Link to="/about">About</Link></li>
        <li className='p__opensans'><Link to="/quiz">Quiz</Link></li>
        <li className='p__opensans'><Link to="/awards">Awards</Link></li>
        <li className='p__opensans'><Link to="/contact">Contact</Link></li>
        {location.pathname !== '/login' && ( 
          <li className='p__opensans app-navbar-login'><Link to="/login">Login</Link></li>
        )}
      </ul>
      <div className='app-navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app-navbar-smallscreen-overlay'>
            <MdSchool fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
            <ul className='app-navbar-smallscreen-links'>
              <li className='p__opensans'><Link to="/">Home</Link></li>
              <li className='p__opensans'><Link to="/about">About</Link></li>
              <li className='p__opensans'><Link to="/quiz">Quiz</Link></li>
              <li className='p__opensans'><Link to="/awards">Awards</Link></li>
              <li className='p__opensans'><Link to="/contact">Contact</Link></li>
              {location.pathname !== '/login' && ( 
                <li className='p__opensans app-navbar-login'><Link to="/login">Login</Link></li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
