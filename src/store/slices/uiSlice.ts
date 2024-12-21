import { createSlice } from '@reduxjs/toolkit';

export interface ICreditCardsState {
  isSidebarVisible: boolean;
}

const initialState: ICreditCardsState = {
  isSidebarVisible: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarVisible = true;
    },
    closeSidebar: (state) => {
      state.isSidebarVisible = false;
    },
  },
});

export const { openSidebar, closeSidebar } = uiSlice.actions;

export default uiSlice.reducer;
