/* eslint-disable no-param-reassign */
// searchSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchapi, API_KEY } from '../../api/api';

export const getCityName = createAsyncThunk('search/getCityName',
  async (searchTerm) => {
    const response = await fetch(`${searchapi}?key=${API_KEY}&q=${searchTerm}`);
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

export default searchSlice.reducer;
