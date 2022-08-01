import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.container}>
      <ul className={css.navbar}>
        <li className={css.navbarItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.navbarItem}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
