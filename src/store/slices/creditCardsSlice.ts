import cardsApi, { ICreditCard } from '@/api/cards';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk(
  'creditCards/fetchCards',
  async ({ start, limit }: { start: number; limit: number }) => {
    const { cards, meta } = await cardsApi.fetchCards(start, limit);

    return {
      cards,
      meta,
    };
  }
);

export interface ICreditCardsState {
  cards: ICreditCard[];
  total: number;
}

const initialState: ICreditCardsState = {
  cards: [],
  total: 0,
};

export const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload.cards;
      state.total = action.payload.meta.total;
    });
  },
});

export default creditCardsSlice.reducer;
