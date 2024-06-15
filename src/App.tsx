import React from 'react';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LobbyPage from './pages/LobbyPage';
import { StompSessionProvider } from 'react-stomp-hooks';
import { IntlProvider } from 'react-intl';
import messages_en  from './i18n/en.json';
import { flatten } from 'flat';

const messages = {
  en: messages_en,
};

const App: React.FunctionComponent = () => {
  const locale = 'en';

  return (
    <IntlProvider locale={locale} messages={flatten(messages[locale])} defaultLocale='en'>
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
    </IntlProvider>
  );
}

export default App;
