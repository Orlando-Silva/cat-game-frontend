import React, { useState } from 'react';
import { create } from '../../services/lobby.service';
import Button from '../Button/Button';
import Input from '../Input/Input';

const CreateLobby: React.FunctionComponent = () => {
    
    const [username, setUsername] = useState<string>();

    const createLobby = async () => {
      await create({ username: username! });
      console.log('TODO: Call Lobby Page');
    }

    return (
      <div className='flex flex-col gap-4 justify-center'>
        <div className='flex justify-center'>
          <Input onChange={(event) => setUsername(event.target.value)} placeholder='Choose your name'></Input>
        </div>
        <div className='flex justify-center'>
          <Button disabled={!username} label="Create Lobby" onClick={() => createLobby()}></Button>
        </div>
      </div>
    )
  };
  
  export default CreateLobby;