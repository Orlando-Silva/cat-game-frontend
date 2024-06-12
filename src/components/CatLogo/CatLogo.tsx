import React, { useState } from 'react';

export interface CatLogoProps {
  size: 'sm' | 'md'
}

const CatLogo: React.FunctionComponent<CatLogoProps> = ({ size }) => {

    const [currentCatIndex, setCurrentCatIndex] = useState<number>(1);

    setTimeout(() => {
      if(currentCatIndex >= 6) {
        setCurrentCatIndex(1)
        return;
      }

      setCurrentCatIndex(currentCatIndex + 1);
    }, 2000);

    return (
      <div className='animate-bounce'>
        <img width={size === 'sm' ? 30 : 200 } height={ size === 'sm' ? 30 : 200 } src={`/assets/cat-${currentCatIndex}.png`} alt="A cute cat" />
      </div>
    )
  };
  
  export default CatLogo;