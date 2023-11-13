import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { detailsSlice } from './weatherdetails/detailsPage';
import { cardSlice } from './weatherCard/weatherCard';
import { searchSlice } from './search/searchBar';

const reducer = combineReducers({ cardSlice, searchSlice });

const store = configureStore({
  reducer,
});

export default store;
