import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.container}>
      <ul className={css.navbar}>
        <li className={css.navbarItem}>Home</li>
        <li>Moives</li>
      </ul>
    </div>
  );
};

export default Navbar;
