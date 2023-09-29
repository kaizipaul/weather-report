import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=dc161bae885b4480a84142424231808&q=London&aqi=no';

export const initialState = {};

export const getWeatherDetails = createAsyncThunk('home/getDetails',
  async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    const weatherData = data.map((city) => ({
      name: city.location.name,
      temperature: city.current.temp_c,
      conditions: city.condition.name,
      wind: city.wind_kph,
      humidity: city.humidity,
      heatindex: city.feelslike_c,
    }));
    return weatherData;
  });

export const detailsSlice = createSlice({
  name: 'currentConditions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherDetails.pending, () => initialState);
    builder.addCase(getWeatherDetails.fulfilled, (state, action) => action.payload);
  },
});

export default detailsSlice.reducer;
