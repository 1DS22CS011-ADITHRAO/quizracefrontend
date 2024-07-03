// Header.js

import React from 'react';
import './Header.css';
import logo from './logo.png'; // Ensure the logo path is correct

const Header = () => {
  return (
    <div className="app-header app-wrapper section-padding app-bg" id='home'>
      <div className='app-wrapper-info'>
        <h1 className='app-header-h1 headtext__cormorant'>Welcome to the Ultimate Quiz Challenge!</h1>
        <p className='p__opensans'>Test your knowledge across various topics and compete with others. Get ready to embark on a journey of fun and learning!</p>
  
      </div>
      <div className='app-wrapper-img'>
        <img src={logo} alt="quiz-logo" />
      </div>
    </div>
  );
};

export default Header;
