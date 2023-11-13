import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { detailsSlice } from './weatherdetails/detailsPage';
import { cardSlice } from './weatherCard/weatherCard';
import { searchSlice } from './search/searchBar';

const store = configureStore({
  reducer: {
    details: detailsSlice,
    card: cardSlice,
    search: searchSlice,
  },
});

export default store;
