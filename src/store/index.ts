import { configureStore } from '@reduxjs/toolkit';
import creditCardsReducer from './slices/creditCardsSlice';

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
