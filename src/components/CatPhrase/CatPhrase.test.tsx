import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CatPhrase from './CatPhrase';

describe('CatPhrase tests', () => {

    test('when component is rendered it should render cat-phrase', () => {
        const { getByTestId } = render(<CatPhrase text='' onSelectPhrase={() => {}} />);

        const phrase = getByTestId('cat-phrase');

        expect(phrase).toBeInTheDocument();
    
    });

    test('when cat-phrase is rendered it should render with the expected text', () => {
        const expectedText = 'test text'
        const { getByTestId } = render(<CatPhrase text='test text' onSelectPhrase={() => {}} />);
        
        const phrase = getByTestId('cat-phrase');

        expect(phrase.textContent).toBe(expectedText);

    })
    
    test('when cat-phrase is clicked it should call onSelectPhrase', () => {
        const onSelectPhrase = jest.fn();
        const { getByTestId } = render(<CatPhrase text='' onSelectPhrase={onSelectPhrase} />);

        const phrase = getByTestId('cat-phrase');

        fireEvent.click(phrase);

        expect(onSelectPhrase).toHaveBeenCalled();

    })

    
});