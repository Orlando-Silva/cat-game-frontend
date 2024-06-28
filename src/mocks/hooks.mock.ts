import * as useLobbyWebSocket from '../hooks/useLobbyWebSocket';
import * as useCatSlideShow from '../hooks/useCatSlideShow';

export const useLobbyWebSocketMock = (implementation?: () => void): void => {
  jest.spyOn(useLobbyWebSocket, 'useLobbyWebSocket').mockImplementation(implementation);
};

export const useCatSlideShowMock = (implementation?: () => number): void => {
  jest.spyOn(useCatSlideShow, 'useCatSlideShow').mockImplementation(implementation);
};
