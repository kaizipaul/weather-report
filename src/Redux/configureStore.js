import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { detailsSlice } from './weatherdetails/detailsPage';
import searchReducer from './search/searchBar';
import detailsReducer from './weatherdetails/detailsPage';

const store = configureStore({
  reducer: {
    search: searchReducer,
    details: detailsReducer,
  },
});

export default store;
