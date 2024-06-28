import { AxiosResponse } from 'axios';

export const generateOkResponseMock = (data: unknown): AxiosResponse => ({
  data,
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
} as AxiosResponse);
