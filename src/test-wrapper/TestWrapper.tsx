// test-utils.js
import React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Location, MemoryRouter } from 'react-router-dom';

const renderWithWrapper = (component: React.ReactElement, location?: Partial<Location>): RenderResult => render(
  <MemoryRouter initialEntries={[location ?? {}]}>
    <IntlProvider locale="en" onError={() => jest.fn()}>
      {component}
    </IntlProvider>
  </MemoryRouter>,
);

export { renderWithWrapper };
