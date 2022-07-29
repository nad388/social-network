import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="#s">Profile</a>
      </div>
      <div>
        <a href="#s">Messages</a>
      </div>
      <div>
        <a href="#s">News</a>
      </div>
      <div>
        <a href="#s">Music</a>
      </div>
      <div className={styles.settings}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
