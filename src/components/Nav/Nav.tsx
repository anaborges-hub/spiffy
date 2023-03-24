import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

type NavProps = {
  open: boolean;
  close: boolean;
};

const Nav = ({ open, close }: NavProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  console.log(isSidebarOpen);

  return (
    <>
      <nav className={styles.nav + ' ' + (isSidebarOpen ? open : close)}>
        <ul className={styles.brand}>
          <li className={styles.item}>
            <Link to="/homepage">Homepage</Link>
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
            <Link to="/library">Closet</Link>
          </li>
        </ul>
        <button
          type="button"
          className={
            styles.hamburger + ' ' + (isSidebarOpen ? 'active' : 'close')
          }
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
