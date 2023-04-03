import React from 'react';
import { CarouselItemType } from '../../types';

import styles from './Item.module.css';

export type Props = CarouselItemType;

function Item({
  imageSrc,
  imageAlt,
  id,
  type,
  fabric,
  season,
  colour,
  style,
  brand,
}: Props) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemSquare}>
        <div className={styles.itemCard}>
          <img src={imageSrc} alt={imageAlt} className={styles.item} />
        </div>
      </div>
    </div>
  );
}

export default Item;
