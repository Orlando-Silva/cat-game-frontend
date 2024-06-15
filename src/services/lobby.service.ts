import axios, { AxiosResponse } from 'axios';
import { CreateLobbyRequest, CreateLobbyResponse, GetPlayersResponse, JoinLobbyRequest, JoinLobbyResponse } from '../interfaces/Lobby';

const BASE_URL = `${process.env.REACT_APP_CAT_BACKEND_BASE_URL}/lobby`

export const create = (request: CreateLobbyRequest): Promise<AxiosResponse<CreateLobbyResponse>> => {
    return axios.post(`${BASE_URL}`, request);
}

export const getPlayers = (roomId: string): Promise<AxiosResponse<GetPlayersResponse>> => {
    return axios.get(`${BASE_URL}/${roomId}/players`);
}

export const join = (roomId: string, request: JoinLobbyRequest): Promise<AxiosResponse<JoinLobbyResponse>> => {
    return axios.post(`${BASE_URL}/${roomId}`, request);
}