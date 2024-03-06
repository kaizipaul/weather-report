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
        gusts: data.current.gust_kph,
        wind_deg: data.current.wind_degree,
        wind_dir: data.current.wind_dir,
        humidity: data.current.humidity,
        heatindex: data.current.feelslike_c,
        visibility: data.current.vis_km,
        precipitation: data.current.precip_mm,
        is_sun_up: data.forecast.forecastday[0].astro.is_sun_up,
        is_moon_up: data.forecast.forecastday[0].astro.is_moon_up,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        temp_high: data.forecast.forecastday[0].day.maxtemp_c,
        temp_low: data.forecast.forecastday[0].day.mintemp_c,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherDetails.pending, () => initialState);
    builder.addCase(getWeatherDetails.fulfilled, (state, action) => action.payload);
  },
});

// export const { addtolist, removefromlist } = detailsSlice.actions;
export default detailsSlice.reducer;
