import { configureStore } from '@reduxjs/toolkit';
import creditCardsReducer from './slices/creditCardsSlice';
import transactionsReducer from './slices/transactionsSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
    transactions: transactionsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
