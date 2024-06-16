import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StompSessionProvider } from 'react-stomp-hooks';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import LobbyPage from './pages/LobbyPage';
import messagesEn from './i18n/en.json';
import CRTWrapper from './wrapper/CRTWrapper';

const messages = {
  en: messagesEn,
};

const App: React.FunctionComponent = () => {
  const locale = 'en';

  return (
    <IntlProvider
      locale={locale}
      messages={flatten(messages[locale])}
      defaultLocale="en"
    >
      <StompSessionProvider url="http://localhost:8080/game">
        <CRTWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/match" element={<GamePage />} />
              <Route
                path="/lobby/:roomId"
                element={<LobbyPage />}
              />
            </Routes>
          </BrowserRouter>
        </CRTWrapper>
      </StompSessionProvider>
    </IntlProvider>
  );
};

export default App;
