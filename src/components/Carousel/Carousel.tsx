import React from 'react';
import { CarouselItemType } from '../../types';
import Item from '../Item/Item';

import styles from './Carousel.module.css';

export type Props = {
  items: Array<CarouselItemType>;
};

function Carousel({ items }: Props) {
  console.log('broken');
  return (
    <div className={styles.carouselContainer}>
      <div>hello</div>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
