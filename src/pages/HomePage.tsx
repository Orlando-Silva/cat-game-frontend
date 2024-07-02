import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../components/shared/Logo/Logo';
import HomeButtons from '../components/HomeButtons/HomeButtons';
import HomeMode from '../components/HomeMode/HomeMode';

export type LobbyAction = 'create' | 'join'

const HomePage: React.FunctionComponent = () => {
  const { roomIdFromURL } = useParams();
  const [currentMode, setCurrentMode] = useState<LobbyAction | undefined>(
    undefined,
  );

  useEffect(() => {
    if (roomIdFromURL) setCurrentMode('join');
  }, []);

  return (
    <div className="flex gap-5 flex-col items-center p-40">
      <Logo />
      <div className="flex gap-2">
        <HomeButtons
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
        <HomeMode currentMode={currentMode} />
      </div>
    </div>
  );
};

export default HomePage;
