import React from 'react';
import { CarouselItemType } from '../../types';
import styles from './Gallery.module.css';
import Item from '../Item/Item';

export type Props = {
  items: Array<CarouselItemType>;
};
function Gallery({ items }: Props) {
  return (
    <>
      <section className={styles.gallery}>
        <div className={styles.columns}>
          {items.map((item, idx) => (
            <Item key={idx} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
