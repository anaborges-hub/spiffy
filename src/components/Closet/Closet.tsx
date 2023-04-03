import React from 'react';
import Carousel from '../Carousel/Carousel';
import items from '../../item.json';

import styles from './Closet.module.css';
// import Gallery from '../Gallery/Gallery';

function Closet() {
  return (
    <div className={styles.container}>
      {/* <Gallery items={items} /> */}
      <Carousel items={items} />
    </div>
  );
}

export default Closet;
