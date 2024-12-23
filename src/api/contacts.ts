import apiClient from '.';

export interface IContact {
  id: string;
  fullName: string;
  role: string;
  avatar: string;
  // card number, ...
}

interface IFetchFrequentContactsResponse {
  contacts: IContact[];
}

type FetchFrequentContacts = () => Promise<IFetchFrequentContactsResponse>;

const fetchFrequentContacts: FetchFrequentContacts = async () => {
  const response = await apiClient.get('/contacts/frequent');

  return {
    contacts: response.data.contacts,
  };
};

const contactsApi = {
  fetchFrequentContacts,
};

export default contactsApi;
