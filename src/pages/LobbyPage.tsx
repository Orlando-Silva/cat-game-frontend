import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import LobbyTable from '../components/LobbyTable/LobbyTable';
import { getPlayers } from '../services/lobby.service';
import Button from '../components/shared/Button/Button';
import { useLobbyWebSocket } from '../hooks/useLobbyWebSocket';

const LobbyPage: React.FunctionComponent = () => {
  const intl = useIntl();
  const location = useLocation();
  const { roomId } = useParams();
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    getPlayers(roomId!).then((response) => {
      setPlayers(response.data.players);
    });
  }, []);

  useLobbyWebSocket(roomId!, location.state.username, players, setPlayers);

  const copyRoomId = (): void => {
    if (roomId) {
      navigator.clipboard.writeText(roomId);
    }
  };

  const startGame = (): void => {
    // TODO: implement
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <LobbyTable players={players} />
      <Button
        label={intl.formatMessage({ id: 'LOBBY.COPY_ROOM_ID' })}
        onClick={() => copyRoomId()}
      />
      <Button
        disabled={players.length <= 1}
        label={intl.formatMessage({ id: 'LOBBY.START_GAME' })}
        onClick={() => startGame()}
      />
    </div>
  );
};

export default LobbyPage;
