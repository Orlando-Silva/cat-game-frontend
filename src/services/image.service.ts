import axios, { AxiosResponse } from 'axios';
import { Image } from '../interfaces/Image';

const BASE_URL = `${process.env.REACT_APP_CAT_BACKEND_BASE_URL}/image`;

export const getImages = (): Promise<AxiosResponse<Image[]>> => axios.get(`${BASE_URL}`);
