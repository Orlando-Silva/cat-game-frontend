import React from 'react';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LobbyPage from './pages/LobbyPage';
import { StompSessionProvider } from 'react-stomp-hooks';

const App: React.FunctionComponent = () => {
  return (
    <StompSessionProvider
            url={'http://localhost:8080/game'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/match" element={<GamePage />} />
          <Route path="/lobby/:roomId" element={<LobbyPage />} />
        </Routes>
      </BrowserRouter>
    </StompSessionProvider>

  );
}

export default App;
