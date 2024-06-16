import React from 'react';
import LobbyTableData from '../LobbyTableData/LobbyTableData';

export interface LobbyTablePlayersProps {
    players: string[]
}

const LobbyTablePlayers: React.FunctionComponent<LobbyTablePlayersProps> = ({
  players,
}) => (
  <>
    {players.map((player, index) => (
      <LobbyTableData slot="filled" label={player} key={index} />
    ))}
  </>
);

export default LobbyTablePlayers;
