import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import {useLocation, useParams} from 'react-router-dom';
import LobbyTable from '../components/LobbyTable/LobbyTable';
import Button from '../components/Button/Button';
import { useStompClient } from 'react-stomp-hooks';
import { getPlayers } from '../services/lobby.service';

const LobbyPage: React.FunctionComponent = () => {
    const location = useLocation();  
    const { roomId } = useParams();
    const [players, setPlayers] = useState<string[]>([])

    const stompClient = useStompClient();

    useEffect(() => {
      getPlayers(roomId!).then(response => {
        const usernames = (response.data.map(player => player.username));
        setPlayers(usernames);
      })
    }, [])

    useEffect(() => {
      if(stompClient) {

        stompClient.subscribe(`/topic/lobby/${roomId}`, (message) => {
          if(message.body !== location.state.username) {
            setPlayers((players) => [...players, message.body]);
          }
        })

        stompClient.publish({destination: `/topic/lobby/${roomId}`, body: location.state.username  });
      }
    }, [])
  
    const copyRoomId = (): void => {
      if(roomId) {
        navigator.clipboard.writeText(roomId)
      }
    }

    const startGame = (): void => {
      console.log('game started')
    }

    return (
      <>
        <Header></Header>
        <LobbyTable players={players}></LobbyTable>
        <Button label='Copy room id' onClick={() => copyRoomId()}></Button>
        <Button label='Start game' onClick={() => startGame()}></Button>
      </>
    )
  };
  
  export default LobbyPage;