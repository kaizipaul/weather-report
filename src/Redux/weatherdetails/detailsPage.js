import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=dc161bae885b4480a84142424231808';

export const getWeatherDetails = createAsyncThunk('weatherDetails/getWeatherDetails',
  async (id) => {
    const response = await fetch(`${apiUrl}&q=id:${id}`);
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
      console.log(details);
      return details;
    }
    console.error('Invalid data format:', data);
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
