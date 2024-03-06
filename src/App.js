/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import NavBar from './Components/navbar/navBar';
import MyCities from './Components/mycities/myCities';
import Search from './Components/searchbar/searchBar';
import WeatherDetails from './Components/detailspage/detailsPage';
import Footer from './Components/footer/footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MyCities />} />
        <Route path="/details/:id" element={<WeatherDetails />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
