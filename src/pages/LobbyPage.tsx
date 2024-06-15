import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import LobbyTable from '../components/LobbyTable/LobbyTable';
import { getPlayers } from '../services/lobby.service';
import { useIntl } from 'react-intl';
import Button from '../components/shared/Button/Button';
import { useLobbyWebSocket } from '../hooks/useLobbyWebSocket';

const LobbyPage: React.FunctionComponent = () => {
    const intl = useIntl();
    const location = useLocation();  
    const { roomId } = useParams();
    const [players, setPlayers] = useState<string[]>([])

    useEffect(() => {
      getPlayers(roomId!).then(response => {
        setPlayers(response.data.players);
      })
    }, []);

    useLobbyWebSocket(roomId!, location.state.username, players, setPlayers);
    
    const copyRoomId = (): void => {
      if(roomId) {
        navigator.clipboard.writeText(roomId)
      }
    }

    const startGame = (): void => {
      console.log('game started')
    }

    return (
      <div className='flex flex-col items-center gap-10'>
        <LobbyTable players={players}></LobbyTable>
        <Button label={intl.formatMessage({ id: 'LOBBY.COPY_ROOM_ID' })} onClick={() => copyRoomId()}></Button>
        <Button label={intl.formatMessage({ id: 'LOBBY.START_GAME' })} onClick={() => startGame()}></Button>
      </div>
    )
  };
  
  export default LobbyPage;