// searchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://api.weatherapi.com/v1/search.json?key=dc161bae885b4480a84142424231808';

export const initialState = {};

export const getCityName = createAsyncThunk('home/getCityName',
  async (name) => {
    const response = await fetch(`${apiUrl}&q=${name}`);
    const data = await response.json();
    const cityData = data.map((city) => ({
      name: city.name,
      country: city.country,
    }));
    return cityData;
  });

const getCitySlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityName.pending, () => initialState);
    builder.addCase(getCityName.fulfilled, (state, action) => action.payload);
  },
});

export const { selectCity } = getCitySlice.actions;

export default getCitySlice.reducer;
