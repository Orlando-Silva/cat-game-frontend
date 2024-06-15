import React, { useState } from 'react';
import { create } from '../../services/lobby.service';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

const CreateLobby: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const intl = useIntl();

    const [username, setUsername] = useState<string>();

    const createLobby = async (): Promise<void> => {
      if(!username) {
        return;
      }

      const response = await create({ username: username });

      navigate(`/lobby/${response.data.roomId}`, { state: { username } });
    }

    return (
      <div className='flex flex-col gap-4 justify-center'>
        <div className='flex justify-center'>
          <Input onChange={(event) => setUsername(event.target.value)} placeholder={intl.formatMessage({ id: 'CREATE_LOBBY.USERNAME_PLACEHOLDER' })}></Input>
        </div>
        <div className='flex justify-center'>
          <Button disabled={!username} label={intl.formatMessage({ id: 'CREATE_LOBBY.BUTTON' })} onClick={() => createLobby()}></Button>
        </div>
      </div>
    )
  };
  
  export default CreateLobby;