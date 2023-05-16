import React from 'react';
import { render } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('renders the page', () => {
    // the situation
    const mockItems = [
      {
        imageSrc: 'mock-image',
        id: 'mock-id',
        type: 'mock-type',
        fabric: 'mock-fabric',
        season: 'mock-season',
        colour: ['mock-colour'],
        style: ['mock-style'],
        brand: 'mock-brand',
      },
      {
        imageSrc: 'mock-image2',
        id: 'mock-id2',
        type: 'mock-type2',
        fabric: 'mock-fabric2',
        season: 'mock-season2',
        colour: ['mock-colour2'],
        style: ['mock-style2'],
        brand: 'mock-brand2',
      },
    ];
    // the thing you're testing
    const { getByTestId } = render(<Gallery items={mockItems} />);
    // checking the outcome
    expect(getByTestId('item-mock-id')).toBeInTheDocument();
    expect(getByTestId('item-mock-id2')).toBeInTheDocument();
  });
});
