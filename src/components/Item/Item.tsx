import React from 'react';
import { ItemType } from '../../types';

import styles from './Item.module.css';

export type Props = ItemType;

function Item({
  imageSrc,
  id,
  type,
  fabric,
  season,
  colour,
  style,
  brand,
}: Props) {
  return (
    <div data-test={`item-${id}`} className={styles.itemContainer}>
      <div className={styles.itemSquare}>
        <div className={styles.itemCard}>
          <a href={`/closet/${id}`}>
            <img
              data-test={`item-${imageSrc}`}
              src={imageSrc}
              alt="Product"
              className={styles.item}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
