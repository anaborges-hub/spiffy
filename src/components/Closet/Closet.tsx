import React from 'react';
import items from '../../item.json';

import styles from './Closet.module.css';
import Gallery from '../Gallery/Gallery';

function Closet() {
  return (
    <div className={styles.container}>
      <Gallery items={items} />
    </div>
  );
}

export default Closet;
