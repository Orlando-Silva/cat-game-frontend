import React from 'react';
import LobbyTableData from '../LobbyTableData/LobbyTableData';

export interface LobbyTableProps {
  players: string[];
}

const LobbyTable: React.FunctionComponent<LobbyTableProps> = ({ 
  players
}) => {
    const remainingSlots = 8 - players.length;

    return (
      <div className='flex justify-center'>
        <div className="grid grid-cols-2 bg-sky-900 text-sky-50 font-semibold  rounded-md border border-sky-950 p-10 gap-10 mt-20">
          { 
            players.map((player, index) => {
              return (
                <LobbyTableData slot='filled' label={player} key={index}></LobbyTableData>
              )
            })
          }
          { 
            Array.from(Array(remainingSlots).keys()).map((index) => {
              return (
                <LobbyTableData slot='avaliable' label='Waiting for player' key={index}></LobbyTableData>
              )
            })
          }
        </div>
      </div>
    )
  };
  
  export default LobbyTable;