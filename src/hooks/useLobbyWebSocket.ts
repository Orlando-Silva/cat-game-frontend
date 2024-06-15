import { Dispatch, SetStateAction, useEffect } from "react";
import { useStompClient } from "react-stomp-hooks";

export const useLobbyWebSocket = (roomId: string, username: string, players: string[], setPlayers: Dispatch<SetStateAction<string[]>>) : void => {
  const stompClient = useStompClient();

  useEffect(() => {
    if(stompClient?.connected) {

      stompClient.subscribe(`/topic/lobby/${roomId}`, (message) => {
          if(!players.includes(message.body)) {
            setPlayers((players) => [...players, message.body]);  
          }
      });

      stompClient.publish({destination: `/topic/lobby/${roomId}`, body: username  });
    }
  }, [stompClient?.connected]);

} 