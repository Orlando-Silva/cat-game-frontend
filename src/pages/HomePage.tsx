import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CreateLobby from '../components/CreateLobby/CreateLobby';
import JoinLobby from '../components/JoinLobby/JoinLobby';
import Button from '../components/Button/Button';
import CatLogo from '../components/CatLogo/CatLogo';

const HomePage: React.FunctionComponent = () => {

    const [currentMode, setCurrentMode] = useState<'create' | 'join' | undefined>(undefined);

    const renderMode = () => {
      if(currentMode === 'create') {
        return <CreateLobby></CreateLobby>
      }

      if(currentMode === 'join') {
        return <JoinLobby></JoinLobby>
      }

      return null;
    }

    const renderButtons = () => {
      if(!currentMode) {
        return (
          <>
            <Button onClick={() => setCurrentMode('join')} label='Join a Lobby'></Button>
            <Button onClick={() => setCurrentMode('create')} label='Create a Lobby'></Button>
          </>
        );
      }

      return null;
    }

    return ( 
      <>
        <Header></Header>
        <div className='flex gap-5 flex-col items-center p-40'>
          <div>
            <CatLogo size='md'></CatLogo>
          </div>
          <div className='flex gap-2'>
            {
              renderButtons()
            }
            { 
              renderMode()
            }
          </div> 
        </div>
      </>
    )
  };
  
  export default HomePage;