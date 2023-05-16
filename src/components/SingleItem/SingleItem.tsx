import React from 'react';
import styles from './SingleItem.module.css';
import items from '../../item.json';
import { useParams } from 'react-router-dom';

function SingleItem() {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return <div>ERROR 404</div>;
  }

  return (
    <>
      <div className={styles.square}>
        <img src={item.imageSrc} alt="One item" />
      </div>

      <div>
        <p>{item.type}</p>
      </div>
    </>
  );
}

export default SingleItem;
