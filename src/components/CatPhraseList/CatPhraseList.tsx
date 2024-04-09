import React from 'react';
import CatPhrase from '../CatPhrase/CatPhrase';
import { Phrase } from '../../interfaces/Phrase';

interface CatPhraseListProps {
  phrases: Phrase[]
  onSelectPhrase: (text: string) => void
}

const CatPhraseList: React.FunctionComponent<CatPhraseListProps> = ({ phrases, onSelectPhrase }) => {

    return (
      <div className='flex flex-row justify-center gap-4'>
        { 
          phrases.map((phrase) => {
            return (
              <CatPhrase key={phrase.id} text={phrase.text} onSelectPhrase={() => onSelectPhrase(phrase.text) }></CatPhrase>
            )
          })
        }
      </div>     
    )
  };
  
  export default CatPhraseList;