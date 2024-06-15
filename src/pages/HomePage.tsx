import React, { useState } from 'react';
import Logo from '../components/shared/Logo/Logo';
import HomeButtons from '../components/HomeButtons/HomeButtons';
import HomeMode from '../components/HomeMode/HomeMode';

export type LobbyAction = 'create' | 'join';

const HomePage: React.FunctionComponent = () => {
    const [currentMode, setCurrentMode] = useState<LobbyAction | undefined>(undefined);

    return (  
      <div className='flex gap-5 flex-col items-center p-40'>
        <Logo></Logo>
        <div className='flex gap-2'>
          <HomeButtons currentMode={currentMode} setCurrentMode={setCurrentMode} />
          <HomeMode currentMode={currentMode} />
        </div> 
      </div>  
    )
  };
  
  export default HomePage;