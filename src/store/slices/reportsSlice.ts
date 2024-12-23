import reportsApi, { IExpenseStatistics, IWeeklyActivity } from '@/api/reports';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchWeeklyActivity = createAsyncThunk('reports/fetchWeeklyActivity', async () => {
  const { data } = await reportsApi.fetchWeeklyActivity();

  return data;
});

export const fetchExpenseStatistics = createAsyncThunk('reports/fetchExpenseStatistics', async () => {
  const { data } = await reportsApi.fetchExpenseStatistics();

  return data;
});

export interface IReportsState {
  weeklyActivity: IWeeklyActivity[];
  expenseStatistics: IExpenseStatistics[];
}

const initialState: IReportsState = {
  weeklyActivity: [],
  expenseStatistics: [],
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
  },
});

export default reportsSlice.reducer;
