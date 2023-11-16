import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { detailsSlice } from './weatherdetails/detailsPage';
import searchReducer from './search/searchBar';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
