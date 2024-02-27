/* eslint-disable no-param-reassign */
// searchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://api.weatherapi.com/v1/search.json?key=dc161bae885b4480a84142424231808';

export const getCityName = createAsyncThunk('search/getCityName',
  async (searchTerm) => {
    const response = await fetch(`${apiUrl}&q=${searchTerm}`);
    const data = await response.json();
    const cityData = data.map((city) => ({
      id: city.id,
      name: city.name,
      country: city.country,
    }));
    return cityData;
  });

export const initialState = [];

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityName.pending, () => initialState);
    builder.addCase(getCityName.fulfilled, (state, action) => action.payload);
  },
});

// export const { selectCity } = searchSlice.actions;
export default searchSlice.reducer;
