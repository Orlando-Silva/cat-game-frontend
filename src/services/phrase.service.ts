import axios, { AxiosResponse } from 'axios';
import { Phrase } from '../interfaces/Phrase';

const BASE_URL = `${process.env.REACT_APP_CAT_BACKEND_BASE_URL}/phrase`

export const getPhrases = (): Promise<AxiosResponse<Phrase[]>> => {
    return axios.get(`${BASE_URL}`);
}