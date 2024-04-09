import React from 'react';

interface SelectedPhraseProps {
  phrase: string
}

const SelectedPhrase: React.FunctionComponent<SelectedPhraseProps> = ({ phrase }) => {
    return (
      <p className='text-slate-200 text-xl font-sans'>{ phrase }</p>
    )
  };
  
  export default SelectedPhrase;