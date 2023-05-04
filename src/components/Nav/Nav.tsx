// ! library?view=gallery&sort=alphabetical
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.brand}>
          <li className={styles.item}>
            <Link
              to={{
                pathname: '/homepage',
              }}
            >
              Homepage
            </Link>
          </li>
        </ul>
        <ul className={styles.brand}>
          <li className={styles.item}>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <ul className={styles.brand}>
          <li className={styles.item}>
            <Link to="/random">Random Outfit</Link>
          </li>
        </ul>
        <ul className={styles.brand}>
          <li className={styles.item}>
            <Link to="/closet">Closet</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
