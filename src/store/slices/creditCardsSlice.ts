import { createSlice } from '@reduxjs/toolkit';

interface ICreditCard {
  cardNumber: string;
  fullName: string;
  expirationDate: string;
  balance: number;
}

export interface ICreditCardsState {
  cards: ICreditCard[];
}

const initialState: ICreditCardsState = {
  cards: [],
};

export const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {},
});

export default creditCardsSlice.reducer;
