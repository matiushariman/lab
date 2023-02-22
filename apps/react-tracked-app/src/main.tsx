import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from './app/hooks/useValue';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
