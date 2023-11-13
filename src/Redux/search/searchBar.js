/* eslint-disable no-param-reassign */
// searchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://api.weatherapi.com/v1/search.json?key=dc161bae885b4480a84142424231808';

export const getCityName = createAsyncThunk('search/getCityName',
  async (searchTerm) => {
    const response = await fetch(`${apiUrl}&q=${searchTerm}`);
    const data = await response.json();
    const cityData = data.map((city) => ({
      name: city.name,
      country: city.country,
    }));
    return cityData;
  });

export const initialState = {
  cities: [],
  status: 'idle',
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityName.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCityName.fulfilled, (state, action) => {
      state.status = 'success';
      state.cities = action.payload;
    });
    builder.addCase(getCityName.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

// export const { selectCity } = searchSlice.actions;
export default searchSlice.reducer;
