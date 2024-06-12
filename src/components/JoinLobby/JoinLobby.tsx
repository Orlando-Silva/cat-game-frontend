import React, { useState } from 'react';
import { join } from '../../services/lobby.service';
import Button from '../Button/Button';
import Input from '../Input/Input';

const JoinLobby: React.FunctionComponent = () => {
  const [username, setUsername] = useState<string>();
  const [roomId, setRoomId] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const joinLobby = async () => {
      await join(roomId!, {
        userName: username!
      }).catch((error) => {
        if(error.response?.data?.message) {
          setErrorMessage(error.response.data.message)
          return;
        }
        setErrorMessage('error while joining lobby')
        
      });

      console.log('TODO: Call Lobby Page');
  }


  return (
    <div className='flex flex-col gap-4 justify-center'>
        <div className='flex flex-row gap-2 justify-center'>
          <Input onChange={(event) => setUsername(event.target.value)} placeholder='Choose your name'></Input>
          <Input onChange={(event) => setRoomId(event.target.value)} placeholder='Room Id'></Input>
        </div> 
        <div className='flex flex-row justify-center'>
          { errorMessage }
        </div>
        <div className='flex justify-center gap-2'>
          <Button disabled={!username || !roomId} onClick={() => joinLobby()} label="Join Lobby"></Button>
        </div>
    </div>

  )
};
  
  export default JoinLobby;