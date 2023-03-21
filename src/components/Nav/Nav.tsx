import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useLocation } from 'react-router-dom';

type NavProps = {
  open: boolean;
};

const Nav = ({ open }: NavProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <>
      <aside className={styles.nav + '' + (isSidebarOpen ? 'open' : 'close')}>
        <nav>
          <ul className={styles.brand}>
            <li className={styles.item}>
              <Link to="/homepage" className={styles.link}>
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
              <Link to="/library">Closet</Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className={
            styles.hamburger + '' + (isSidebarOpen ? 'active' : 'close')
          }
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </aside>
    </>
  );
};

export default Nav;
// export function Nav() {
