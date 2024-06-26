import { Dispatch, SetStateAction, useEffect } from 'react';
import { useStompClient } from 'react-stomp-hooks';
import { getPlayers } from '../services/lobby.service';

export const useLobbyWebSocket = (
  roomId: string,
  players: string[],
  setPlayers: Dispatch<SetStateAction<string[]>>,
): void => {
  const stompClient = useStompClient();

  useEffect(() => {
    getPlayers(roomId!).then((response) => {
      setPlayers(response.data.players);

      if (stompClient?.connected) {
        stompClient.subscribe(`/topic/lobby/${roomId}`, (message) => {
          if (!players.includes(message.body)) {
            setPlayers((oldPlayers) => [...oldPlayers, message.body]);
          }
        });
      }
    });
  }, [stompClient?.connected]);
};
