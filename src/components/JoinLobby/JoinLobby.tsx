import React, { useState } from 'react';
import { join } from '../../services/lobby.service';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import { useNavigate } from "react-router-dom";
import { useIntl } from 'react-intl';

const JoinLobby: React.FunctionComponent = () => {
  const intl = useIntl();
  const [username, setUsername] = useState<string>();
  const [roomId, setRoomId] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate = useNavigate();

  const joinLobby = async (): Promise<void> => {
      const response = await join(roomId!, { username: username! });
      
      if(!response?.data?.roomId) {
        setErrorMessage(intl.formatMessage({ id: 'JOIN_LOBBY.ERROR' }))
        return;
      }
        
      navigate(`/lobby/${response.data.roomId}`, { state: { username } });
  }

  return (
    <div className='flex flex-col gap-4 justify-center'>
        <div className='flex flex-col gap-12 justify-center'>
          <Input onChange={(event) => setUsername(event.target.value)} placeholder={intl.formatMessage({ id: 'JOIN_LOBBY.USERNAME_PLACEHOLDER' })}></Input>
          <Input onChange={(event) => setRoomId(event.target.value)} placeholder={intl.formatMessage({ id: 'JOIN_LOBBY.ROOM_ID_PLACEHOLDER' })}></Input>
        </div> 
        <div className='flex flex-row justify-center'>
          { errorMessage }
        </div>
        <div className='flex justify-center gap-2'>
          <Button disabled={!username || !roomId} onClick={() => joinLobby()} label={intl.formatMessage({ id: 'JOIN_LOBBY.BUTTON' })}></Button>
        </div>
    </div>

  )
};
  
  export default JoinLobby;