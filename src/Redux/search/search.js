// searchSlice.js

import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    selectedCity: null,
  },
  reducers: {
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { selectCity } = searchSlice.actions;

export default searchSlice.reducer;
