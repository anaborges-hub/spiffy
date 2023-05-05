import React from 'react';
import items from '../../item.json';

import styles from './Closet.module.css';
import Gallery from '../Gallery/Gallery';

type Props = {
  galleryView: boolean;
};

function Closet({ galleryView }: Props) {
  return (
    <div className={styles.container}>
      <Gallery items={items} />
    </div>
  );
}

export default Closet;
