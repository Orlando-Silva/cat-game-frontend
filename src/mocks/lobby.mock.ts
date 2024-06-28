import { faker } from '@faker-js/faker';
import {
  GetPlayersResponse,
} from '../interfaces/Lobby';

export const generateGetPlayersMock = (getPlayersPartial?: Partial<GetPlayersResponse>): GetPlayersResponse => ({
  roomId: faker.string.uuid(),
  players: [],
  ...getPlayersPartial,
});
