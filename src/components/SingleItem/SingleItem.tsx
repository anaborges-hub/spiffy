import React from 'react';
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
    <div>
      <figure>
        <img src={imageSrc} alt={imageAlt} />
      </figure>
      <div>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default SingleItem;
