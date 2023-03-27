import React from 'react';
import { CarouselItemType } from '../../types';
import item from '../../item.json';

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
    <li className={styles.item}>
      <img src={imageSrc} alt={imageAlt} className={styles.carImg} />
    </li>
  );
}

export default Item;
