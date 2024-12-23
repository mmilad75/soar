import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import creditCardsReducer from './slices/creditCardsSlice';
import transactionsReducer from './slices/transactionsSlice';
import reportsReducer from './slices/reportsSlice';
import contactsReducer from './slices/contactsSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    creditCards: creditCardsReducer,
    transactions: transactionsReducer,
    reports: reportsReducer,
    contacts: contactsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
