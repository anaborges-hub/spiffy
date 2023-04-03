import React from 'react';
import { CarouselItemType } from '../../types';
import Item from '../Item/Item';

import styles from './Gallery.module.css';

export type Props = {
  items: Array<CarouselItemType>;
};

function Gallery({ items }: Props) {
  return (
    <div className={styles.carouselContainer}>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
