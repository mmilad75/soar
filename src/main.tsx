import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { worker } from './mocks/api/worker.ts';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.tsx';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  await worker.start({ onUnhandledRequest: 'bypass' });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
