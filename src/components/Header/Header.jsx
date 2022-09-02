import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logoHeader} src={logo} alt="logo" />
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
