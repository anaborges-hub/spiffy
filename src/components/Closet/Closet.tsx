import React from 'react';
import Carousel from '../Carousel/Carousel';
import items from '../../item.json';

import styles from './Closet.module.css';
import Gallery from '../Gallery/Gallery';

type Props = {
  galleryView: boolean;
};

function Closet({ galleryView }: Props) {
  return (
    <div className={styles.container}>
      {/* {galleryView && <Gallery items={items} />} */}
      <Carousel items={items} />
    </div>
  );
}

export default Closet;
