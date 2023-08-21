import React, { useEffect, useState } from 'react';
import './detailspage.css';
import { FiDroplet } from 'react-icons/fi';
import { PiWaves, PiThermometerHot } from 'react-icons/pi';
import { Card, CardBody } from '@chakra-ui/react';

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({});
  // // const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // You should adjust this code to handle data from your specific API.
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=dc161bae885b4480a84142424231808&q=London&aqi=no');
        const data = await response.json();
        console.log(data);
        setWeatherData(data.current);
        setLocation(data.location);
        // setForecastData(data.forecast);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
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
              <p>Wind</p>
            </div>
            <div className="humidity column">
              <FiDroplet size="2.3rem" />
              <p className="weatherdata">
                {weatherData.humidity}
                %
              </p>
              <p>Humidity</p>
            </div>
            <div className="sunrise column">
              <PiThermometerHot size="2.3rem" />
              <p className="weatherdata">
                {Math.round(weatherData.feelslike_c)}
                °
              </p>
              <p>Feels Like</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherDetails;
