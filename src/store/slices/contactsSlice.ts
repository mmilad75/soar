import contactsApi, { IContact } from '@/api/contacts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFrequentContacts = createAsyncThunk('creditCards/fetchFrequentContacts', async () => {
  const { contacts } = await contactsApi.fetchFrequentContacts();

  return {
    contacts,
  };
});

export interface IContactsState {
  contacts: IContact[];
  total: number;
  frequentContacts: IContact[];
}

const initialState: IContactsState = {
  frequentContacts: [],
  contacts: [],
  total: 0,
};

export const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFrequentContacts.fulfilled, (state, action) => {
      state.frequentContacts = action.payload.contacts;
    });
  },
});

export default creditCardsSlice.reducer;
