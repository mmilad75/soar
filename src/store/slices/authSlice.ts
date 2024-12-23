import authApi, { IUserInfo } from '@/api/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('transactions/fetchUser', async () => {
  const { user } = await authApi.fetchUser();

  return {
    user,
  };
});

export interface IAuthState {
  user: null | IUserInfo[];
  loading: boolean;
}

const initialState: IAuthState = {
  user: null,
  loading: true,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
    });
  },
});

export default transactionsSlice.reducer;
