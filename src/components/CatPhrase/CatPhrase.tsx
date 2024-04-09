import React from 'react';

interface CatPhraseProps {
  text: string
  onSelectPhrase: () => void
}

const CatPhrase: React.FunctionComponent<CatPhraseProps> = ({ text, onSelectPhrase }) => {

    return (
      <button 
        type="button" 
        className='font-sans px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 hover:-translate-y-1 hover:scale-110 p-2 duration-300' 
        onClick={() => onSelectPhrase()} >
          { text }
      </button>      
    )
  };
  
  export default CatPhrase;