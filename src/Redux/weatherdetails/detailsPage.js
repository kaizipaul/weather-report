import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=dc161bae885b4480a84142424231808';

export const initialState = {};

export const getWeatherDetails = createAsyncThunk('home/getDetails',
  async (name) => {
    const response = await fetch(`${apiUrl}&q=${name}`);
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
  reducers: {
    addtolist: (state, action) => state.map((city) => {
      if (city.name !== action.payload) return city;
      return { ...city, added: true };
    }),
    removefromlist: (state, action) => state.map((city) => {
      if (city.name !== action.payload) return city;
      return { ...city, added: false };
    })
    ,
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherDetails.pending, () => initialState);
    builder.addCase(getWeatherDetails.fulfilled, (state, action) => action.payload);
  },
});

export const { addtolist, removefromlist } = detailsSlice.actions;
export default detailsSlice.reducer;
