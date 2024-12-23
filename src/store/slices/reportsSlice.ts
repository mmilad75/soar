import reportsApi, { IBalanceHistory, IExpenseStatistics, IWeeklyActivity } from '@/api/reports';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchWeeklyActivity = createAsyncThunk('reports/fetchWeeklyActivity', async () => {
  const { data } = await reportsApi.fetchWeeklyActivity();

  return data;
});

export const fetchExpenseStatistics = createAsyncThunk('reports/fetchExpenseStatistics', async () => {
  const { data } = await reportsApi.fetchExpenseStatistics();

  return data;
});

export const fetchBalanceHistory = createAsyncThunk('reports/fetchBalanceHistory', async () => {
  const { data } = await reportsApi.fetchBalanceHistory();

  return data;
});

export interface IReportsState {
  weeklyActivity: IWeeklyActivity[];
  expenseStatistics: IExpenseStatistics[];
  balanceHistory: IBalanceHistory[];
}

const initialState: IReportsState = {
  weeklyActivity: [],
  expenseStatistics: [],
  balanceHistory: [],
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyActivity.fulfilled, (state, action) => {
      state.weeklyActivity = action.payload;
    });
    builder.addCase(fetchExpenseStatistics.fulfilled, (state, action) => {
      state.expenseStatistics = action.payload;
    });
    builder.addCase(fetchBalanceHistory.fulfilled, (state, action) => {
      state.balanceHistory = action.payload;
    });
  },
});

export default reportsSlice.reducer;
