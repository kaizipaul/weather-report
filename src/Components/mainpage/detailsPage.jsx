import React, { useEffect, useState } from 'react';
import './detailspage.css';
import { UseSelector, useDispatch } from 'react-redux';
import { FiDroplet } from 'react-icons/fi';
import { PiWaves, PiThermometerHot } from 'react-icons/pi';
import { Card, CardBody } from '@chakra-ui/react';
import { getWeatherDetails, initialState } from '../../Redux/weatherdetails/detailsPage';

const WeatherDetails = () => {
  const details = UseSelector((state) => state.weatherDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherDetails());
  }, []);

  return (
    {details === initialState ? (
      <div>
      <p>Loading...</p>
      </div>
    ) : (
      <div className="main-page">
    <h2 className="city-heading">{location.name}</h2>
    <p className="temperature-main">
      {Math.round(weatherData.temp_c)}
      °
    </p>
    <div className="general-conditions">
      {/* <h3>{weatherData.condition}</h3> */}
      <p className="temperature-range">
        <p>H:</p>
        {' '}
        <p>L:</p>
      </p>
    </div>
    <Card backgroundColor="gray.100">
      <CardBody>
        <div className="current-conditions">
          <div className="wind column">
            <PiWaves size="2.3rem" />
            <p className="weatherdata">
              {Math.round(weatherData.wind_kph)}
              km/h
            </p>
          </div>
          <div className="humidity column">
            <FiDroplet size="2.3rem" />
            <p className="weatherdata">
              {weatherData.humidity}
              %
            </p>
          </div>
          <div className="sunrise column">
            <PiThermometerHot size="2.3rem" />
            <p className="weatherdata">
              {Math.round(weatherData.feelslike_c)}
              °
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  </div>
)};
  );
};

export default WeatherDetails;
