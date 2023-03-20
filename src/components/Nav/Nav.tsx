import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav>
      <ul className={styles}>
        <li className={styles}>
          <Link to="/homepage" className={styles}>
            Homepage
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/random">Random Outfit</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/library">Closet</Link>
        </li>
      </ul>
    </nav>
  );
}
