import { configureStore } from '@reduxjs/toolkit';
import creditCardsReducer from './slices/creditCardsSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    creditCards: creditCardsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
