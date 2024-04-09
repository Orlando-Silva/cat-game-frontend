import React from 'react';

interface CatImageProps {
  source: string
  onSelectCat: () => void
}

const CatImage: React.FunctionComponent<CatImageProps> = ({ source, onSelectCat }) => {

    return (
      <div className='border border-white/5 bg-slate-800/25 rounded-xl p-6 hover:-translate-y-1 hover:scale-110 duration-300'>
        <img
          data-testid="cat-image"
          onClick={() => onSelectCat() } 
          src={source} 
          width="200" 
          height="200"
        />
      </div>      
    )
  };
  
  export default CatImage;