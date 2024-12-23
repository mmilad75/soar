import reportsApi, { IWeeklyActivity } from '@/api/reports';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchWeeklyActivity = createAsyncThunk('reports/fetchWeeklyActivity', async () => {
  const { data } = await reportsApi.fetchWeeklyActivity();

  return data;
});

export interface IReportsState {
  weeklyActivity: IWeeklyActivity[];
}

const initialState: IReportsState = {
  weeklyActivity: [],
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyActivity.fulfilled, (state, action) => {
      state.weeklyActivity = action.payload;
    });
  },
});

export default reportsSlice.reducer;
