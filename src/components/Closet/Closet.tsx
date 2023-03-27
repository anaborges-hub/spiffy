import React from 'react';
import Carousel from '../Carousel/Carousel';
import items from '../../item.json';

import styles from './Closet.module.css';

function Closet() {
  return (
    <div className={styles.container}>
      <Carousel items={items} />
    </div>
  );
}

export default Closet;
