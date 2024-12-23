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

const reportsApi = {
  fetchWeeklyActivity,
};

export default reportsApi;
