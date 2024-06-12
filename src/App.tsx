import React from 'react';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
