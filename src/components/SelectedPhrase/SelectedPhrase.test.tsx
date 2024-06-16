import React from 'react';
import { render } from '@testing-library/react';
import SelectedPhrase from './SelectedPhrase';

describe('SelectedPhrase tests', () => {
    test('selectedPhrase should render correctly', () => {
        const { getByTestId } = render(<SelectedPhrase phrase='' />);
        
        const phraseElement = getByTestId('selected-phrase');
        
        expect(phraseElement).toBeInTheDocument();
    });

    test('when selectedPhrase has a phrase, it should render that phrase', () => {
        const testPhrase = 'Teste';
        const { getByTestId } = render(<SelectedPhrase phrase={testPhrase} />);
        
        const phraseElement = getByTestId('selected-phrase');
        
        expect(phraseElement.textContent).toBe(testPhrase);
    });
 
});

