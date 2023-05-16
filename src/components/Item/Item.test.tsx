import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  it('shows the correct image', () => {
    const mockItems = {
      imageSrc: 'mock-image',
      id: 'mock-id',
      type: 'mock-type',
      fabric: 'mock-fabric',
      season: 'mock-season',
      colour: ['mock-colour'],
      style: ['mock-style'],
      brand: 'mock-brand',
    };

    const { getByTestId } = render(<Item {...mockItems} />);

    expect(getByTestId('item-mock-id')).toBeDefined();
    expect(getByTestId('item-mock-image')).toBeDefined();
  });

  it('shows the src of the image is the same as imageSrc', () => {
    const mockItems = {
      imageSrc: 'image-mock',
      id: 'mock-id',
      type: 'mock-type',
      fabric: 'mock-fabric',
      season: 'mock-season',
      colour: ['mock-colour'],
      style: ['mock-style'],
      brand: 'mock-brand',
    };
    const { getByTestId } = render(Item({ ...mockItems }));
    const image = getByTestId('item-image-mock') as HTMLImageElement;

    expect(image).toBeDefined();
    expect(getByTestId('item-image-mock')).toHaveAttribute('src', 'image-mock');
  });
});
