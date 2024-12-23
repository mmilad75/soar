import apiClient from '.';

export interface ICreditCard {
  id: string;
  cardNumber: string;
  fullName: string;
  expirationDate: string;
  balance: number;
  active: boolean;
}

interface IFetchCardsResponse {
  cards: ICreditCard[];
  meta: { total: number };
}

type FetchCards = (start: number, limit: number) => Promise<IFetchCardsResponse>;

const fetchCards: FetchCards = async (start: number, limit: number) => {
  const params = { start, limit };
  const response = await apiClient.get('/credit-cards', { params });

  return {
    cards: response.data.data,
    meta: response.data.meta,
  };
};

const cardsApi = {
  fetchCards,
};

export default cardsApi;
