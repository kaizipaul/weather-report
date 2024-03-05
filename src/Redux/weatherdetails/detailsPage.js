import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { detailsapi, API_KEY } from '../../api/api';

export const getWeatherDetails = createAsyncThunk('weatherDetails/getWeatherDetails',
  async (id) => {
    const response = await fetch(`${detailsapi}?key=${API_KEY}&q=id:${id}`);
    const data = await response.json();

    // Check if 'data' is an object with a 'location' property
    if (data.location) {
      const details = {
        name: data.location.name,
        temperature: data.current.temp_c,
        conditions: data.current.condition.text,
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
        heatindex: data.current.feelslike_c,
        visibility: data.current.vis_km,
        precipitation: data.current.precip_mm,
      };
      return details;
    }
    // Return an appropriate value or throw an error based on your error handling strategy
    return {}; // Returning an empty object for now
  });

export const initialState = {};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    // Action 1: Add to collection
    addtolist: (state, action) => state.map((city) => {
      if (city.id !== action.payload) return city;
      return { ...city, added: true };
    }),

    // Action 2: Remove from collection
    removefromlist: (state, action) => state.map((city) => {
      if (city.id !== action.payload) return city;
      return { ...city, added: false };
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherDetails.pending, () => initialState);
    builder.addCase(getWeatherDetails.fulfilled, (state, action) => action.payload);
  },
});

export const { addtolist, removefromlist } = detailsSlice.actions;
export default detailsSlice.reducer;
