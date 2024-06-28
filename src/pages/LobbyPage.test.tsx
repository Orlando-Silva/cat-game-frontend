import React, { Dispatch, SetStateAction } from 'react';
import { waitFor } from '@testing-library/react';
import LobbyPage from './LobbyPage';
import { renderWithWrapper } from '../test-wrapper/TestWrapper';
import * as lobbyService from '../services/lobby.service';
import { generateGetPlayersMock } from '../mocks/lobby.mock';
import { generateOkResponseMock } from '../mocks/axios.mock';
import { useLobbyWebSocketMock } from '../mocks/hooks.mock';

describe('LobbyPage component tests', () => {
  beforeAll(() => {
    useLobbyWebSocketMock();
  });

  test('The start game button must be disabled if there is only one player in the lobby', async () => {
    jest.spyOn(lobbyService, 'getPlayers').mockResolvedValueOnce(
      generateOkResponseMock(
        generateGetPlayersMock({
          players: ['player'],
        }),
      ),
    );

    const { getByTestId } = renderWithWrapper(<LobbyPage />, { state: { username: 'teste' } });

    await waitFor(() => {
      const startGameButton = getByTestId('start-game-button');

      expect(startGameButton).toBeDisabled();
    });
  });

  test('The start game button must be enabled if there is more than one player in the lobby', async () => {
    jest.spyOn(lobbyService, 'getPlayers').mockResolvedValueOnce(
      generateOkResponseMock(
        generateGetPlayersMock({
          players: ['player', 'player'],
        }),
      ),
    );

    const { getByTestId } = renderWithWrapper(<LobbyPage />, { state: { username: 'teste' } });

    await waitFor(() => {
      const startGameButton = getByTestId('start-game-button');

      expect(startGameButton).not.toBeDisabled();
    });
  });
});
