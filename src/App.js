/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/navbar/navBar';
import WeatherDetails from './Components/mainpage/detailsPage';
// import MyCities from './Components/mycities/myCities';

function App() {
  return (
    <>
      <NavBar />
      <WeatherDetails />
      {/* <Routes>
        <Route exact path="/mycities" element={<MyCities />} />
      </Routes> */}
    </>
  );
}

export default App;
