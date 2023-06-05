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
      <img src={item.imageSrc} alt={item.type} />
      <div>
        <p>{item.type}</p>
        <p>{item.brand}</p>
        <p>{item.colour}</p>
        <p>{item.season}</p>
        <p>{item.style}</p>
        <p>{item.fabric}</p>
      </div>
    </>
  );
}

export default SingleItem;
