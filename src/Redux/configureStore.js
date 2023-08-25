import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { detailsSlice } from './weatherdetails/detailsPage';

const store = configureStore({
  reducer: {
    weatherDetails: detailsSlice,
  },
},
applyMiddleware(logger));

export default store;
