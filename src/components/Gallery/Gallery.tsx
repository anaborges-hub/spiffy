import React from 'react';
import { ItemType } from '../../types';
import Item from '../Item/Item';

import styles from './Gallery.module.css';

export type Props = {
  items: Array<ItemType>;
};

function Gallery({ items }: Props) {
  return (
    <div className={styles.galleryContainer}>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
