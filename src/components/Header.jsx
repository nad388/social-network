import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img className="logoHeader" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
