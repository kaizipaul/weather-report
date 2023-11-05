import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { detailsSlice } from './weatherdetails/detailsPage';
import { cardSlice } from './weatherCard/weatherCard';
import { getCitySlice } from './search/searchBar';

const store = configureStore({
  reducer: {
    weatherDetails: detailsSlice,
    weatherCard: cardSlice,
    searchBar: getCitySlice,
  },
});

export default store;
