import React from 'react';
import { render } from '@testing-library/react';
import LobbyPage from './LobbyPage';

describe('LobbyPage component tests', () => {
  test('The start game button must be disabled if there is only one player in the lobby', () => {
    const players = ['user'];

    const { getByTestId } = render(<LobbyPage />);
    const startGameButton = getByTestId('start-game-button');

    expect(startGameButton).toBeDisabled();
  });

  test('The start game button must be enabled if there is more than one player in the lobby', () => {
    const players = ['user', 'user2'];

    const { getByTestId } = render(<LobbyPage />);
    const startGameButton = getByTestId('start-game-button');

    expect(startGameButton).not.toBeDisabled();
  });
});
