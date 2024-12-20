import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Set up the service worker
export const worker = setupWorker(...handlers);
