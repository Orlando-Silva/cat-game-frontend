import React from 'react';
import { LobbyAction } from '../../pages/HomePage';
import CreateLobby from '../CreateLobby/CreateLobby';
import JoinLobby from '../JoinLobby/JoinLobby';

export interface HomeModeProps {
    currentMode?: LobbyAction
}

const HomeMode: React.FunctionComponent<HomeModeProps> = ({ currentMode }) => {
  if (currentMode === 'create') {
    return <CreateLobby />;
  }

  if (currentMode === 'join') {
    return <JoinLobby />;
  }

  return null;
};

export default HomeMode;
