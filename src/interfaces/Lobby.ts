export interface CreateLobbyRequest {
    username: string;
}

export interface CreateLobbyResponse {
    roomId: string;
}

export interface JoinLobbyRequest {
    username: string;
}

export interface JoinLobbyResponse {
    roomId: string;
    players: string[];
}

export interface GetPlayersResponse {
    roomId: string;
    players: string[];
}