import transactionsApi from '@/api/transactions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async ({ start, limit }: { start: number; limit: number }) => {
    const { transactions, meta } = await transactionsApi.fetchTransactions(start, limit);

    return {
      transactions,
      meta,
    };
  }
);

export interface ITransactionsState {
  transactions: ITransaction[];
  total: number;
}

const initialState: ITransactionsState = {
  transactions: [],
  total: 0,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.transactions;
      state.total = action.payload.meta.total;
    });
  },
});

export default transactionsSlice.reducer;
