import React from 'react';
import { useIntl } from 'react-intl';
import LobbyTableData from '../LobbyTableData/LobbyTableData';

export interface LobbyTableAvaliableSlotsProps {
    players: string[]
}

const LobbyTableAvaliableSlots: React.FunctionComponent<
    LobbyTableAvaliableSlotsProps
> = ({ players }) => {
  const intl = useIntl();
  const remainingSlots = 8 - players.length;

  return (
    <>
      {Array.from(Array(remainingSlots).keys()).map((index) => (
        <LobbyTableData
          slot="avaliable"
          label={intl.formatMessage({
            id: 'LOBBY.TABLE.AVALIABLE_SLOT',
          })}
          key={index}
        />
      ))}
    </>
  );
};

export default LobbyTableAvaliableSlots;
