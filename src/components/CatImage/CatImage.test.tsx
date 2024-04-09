import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CatImage from './CatImage';


describe('CatImage tests', () => {

  test('when component is rendered it should render cat-image', () => {
    const { getByTestId } = render(<CatImage source='' onSelectCat={() => {}} />);
    
    const image = getByTestId('cat-image');
    
    expect(image).toBeInTheDocument();
  });

  test('when cat-image is rendered it should render with width and height attributes', () => {
    const { getByTestId } = render(<CatImage source='' onSelectCat={() => {}} />);
    
    const image = getByTestId('cat-image');

    expect(image.getAttribute('width')).toBe("200");
    expect(image.getAttribute('height')).toBe("200");
  });

  test('when cat-image is rendered it should render with expected source', () => {
    const expectedSource = 'this-is-a-test-source';
    const { getByTestId } = render(<CatImage source={expectedSource} onSelectCat={() => {}} />);
    
    const image = getByTestId('cat-image');

    expect(image.getAttribute('src')).toBe(expectedSource);
  });

  test('when cat-image is clicked it should call onSelectCat', () => {
    const onSelectCat = jest.fn();
    const { getByTestId } = render(<CatImage source='' onSelectCat={onSelectCat} />);
    
    const image = getByTestId('cat-image');
    fireEvent.click(image);

    expect(onSelectCat).toHaveBeenCalled();
  });

});


