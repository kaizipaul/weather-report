import './App.css';
import React from 'react';
import NavBar from './Components/navbar/navBar';
import WeatherDetails from './Components/mainpage/detailsPage';

function App() {
  return (
    <>
      <NavBar />
      <WeatherDetails />
    </>
  );
}

export default App;
