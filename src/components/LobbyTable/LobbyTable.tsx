import React from 'react';
import LobbyTablePlayers from '../LobbyTablePlayersSlot/LobbyTablePlayersSlot';
import LobbyTableAvaliableSlots from '../LobbyTableAvaliableSlot/LobbyTablePlayersAvaliable';

export interface LobbyTableProps {
    players: string[]
}

const LobbyTable: React.FunctionComponent<LobbyTableProps> = ({ players }) => (
  <div className="flex justify-center">
    <div className="grid grid-cols-4  text-sky-50 font-semibold p-10 gap-10">
      <LobbyTablePlayers players={players} />
      <LobbyTableAvaliableSlots players={players} />
    </div>
  </div>
);

export default LobbyTable;
