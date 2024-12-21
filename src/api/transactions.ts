import apiClient from '.';

interface IFetchTransactionsResponse {
  transactions: ITransaction[];
  meta: { total: number };
}

type FetchTransactions = (start: number, limit: number) => Promise<IFetchTransactionsResponse>;

const fetchTransactions: FetchTransactions = async (start: number, limit: number) => {
  const params = { start, limit };
  const response = await apiClient.get('/transactions', { params });

  return {
    transactions: response.data.data,
    meta: response.data.meta,
  };
};

const transactionsApi = {
  fetchTransactions,
};

export default transactionsApi;
