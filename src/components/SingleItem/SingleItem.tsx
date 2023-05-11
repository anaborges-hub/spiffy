import React from 'react';
import styles from './SingleItem.module.css';
import { ItemType } from '../../types';

export type Props = ItemType;

function SingleItem({
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
    <>
      <div className={styles.square}>
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div>
        <p>{type}</p>
      </div>
    </>
  );
}

export default SingleItem;
