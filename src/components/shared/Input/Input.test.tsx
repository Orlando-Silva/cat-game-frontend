import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input tests', () => {
  test('Input should render correctly', () => {
    const { getByTestId } = render(<Input onChange={() => jest.fn()} placeholder="test" />);

    const logo = getByTestId('cat-input');

    expect(logo).toBeInTheDocument();
  });
});
