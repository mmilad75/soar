import apiClient from '.';

// Weekly Activity
export interface IWeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

interface IFetchWeeklyActivityResponse {
  data: IWeeklyActivity[];
}

type FetchWeeklyActivity = () => Promise<IFetchWeeklyActivityResponse>;

const fetchWeeklyActivity: FetchWeeklyActivity = async () => {
  const response = await apiClient.get('/reports/weekly-activity');

  return {
    data: response.data.data,
  };
};

// Expense Statistics
export interface IExpenseStatistics {
  label: string;
  value: number;
}

interface IFetchExpenseStatisticsResponse {
  data: IExpenseStatistics[];
}

type FetchExpenseStatistics = () => Promise<IFetchExpenseStatisticsResponse>;

const fetchExpenseStatistics: FetchExpenseStatistics = async () => {
  const response = await apiClient.get('/reports/expense-statistics');

  return {
    data: response.data.data,
  };
};

// Expense Statistics
export interface IBalanceHistory {
  date: string;
  balance: number;
}

interface IFetchBalanceHistoryResponse {
  data: IBalanceHistory[];
}

type FetchBalanceHistory = () => Promise<IFetchBalanceHistoryResponse>;

const fetchBalanceHistory: FetchBalanceHistory = async () => {
  const response = await apiClient.get('/reports/balance-history');

  return {
    data: response.data.data,
  };
};

// API
const reportsApi = {
  fetchWeeklyActivity,
  fetchExpenseStatistics,
  fetchBalanceHistory,
};

export default reportsApi;
