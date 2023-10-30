import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { detailsSlice } from './weatherdetails/detailsPage';
import { cardSlice } from './weatherCard/weatherCard';

const store = configureStore({
  reducer: {
    weatherDetails: detailsSlice,
    weatherCard: cardSlice,
  },
});

export default store;
