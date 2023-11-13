/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/navbar/navBar';
// import WeatherDetails from './Components/mainpage/detailsPage';
import MyCities from './Components/mycities/myCities';
import Search from './Components/searchbar/searchBar';

function App() {
  return (
    <>
      <NavBar />
      <MyCities />
      <Search />
      <Routes>
        <Route exact path="/" element={<MyCities />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
