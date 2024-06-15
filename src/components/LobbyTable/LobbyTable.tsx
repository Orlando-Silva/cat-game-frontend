import React from 'react';
import LobbyTableData from '../LobbyTableData/LobbyTableData';
import { useIntl } from 'react-intl';

export interface LobbyTableProps {
  players: string[];
}

const LobbyTable: React.FunctionComponent<LobbyTableProps> = ({ 
  players
}) => {
    const intl = useIntl();
    const remainingSlots = 8 - players.length;

    return (
      <div className='flex justify-center'>
        <div className="grid grid-cols-4  text-sky-50 font-semibold p-10 gap-10">
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
                <LobbyTableData slot='avaliable' label={intl.formatMessage({ id: 'LOBBY.TABLE.AVALIABLE_SLOT' })} key={index}></LobbyTableData>
              )
            })
          }
        </div>
      </div>
    )
  };
  
  export default LobbyTable;