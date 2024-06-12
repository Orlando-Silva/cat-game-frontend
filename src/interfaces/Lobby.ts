export interface CreateLobbyRequest {
    username: string;
}

export interface CreateLobbyResponse {
    roomId: string;
}

export interface JoinLobbyRequest {
    userName: string;
}

export interface JoinLobbyResponse {
    roomId: string;
    players: string[];
}