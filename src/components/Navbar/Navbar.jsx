import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Music
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.settings}`}>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
