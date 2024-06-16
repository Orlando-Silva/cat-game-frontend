import React, { Dispatch, SetStateAction } from 'react';
import { useIntl } from 'react-intl';
import Button from '../shared/Button/Button';
import { LobbyAction } from '../../pages/HomePage';

export interface HomeButtonsProps {
    setCurrentMode: Dispatch<SetStateAction<LobbyAction | undefined>>
    currentMode?: LobbyAction
}

const HomeButtons: React.FunctionComponent<HomeButtonsProps> = ({
  currentMode,
  setCurrentMode,
}) => {
  const intl = useIntl();

  if (!currentMode) {
    return (
      <div className="flex gap-6">
        <Button
          onClick={() => setCurrentMode('join')}
          label={intl.formatMessage({ id: 'HOME.JOIN_LOBBY' })}
        />
        <Button
          onClick={() => setCurrentMode('create')}
          label={intl.formatMessage({ id: 'HOME.CREATE_LOBBY' })}
        />
      </div>
    );
  }

  return null;
};

export default HomeButtons;
