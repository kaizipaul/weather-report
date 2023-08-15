import React, { useEffect, useState } from 'react';
import './detailspage.css';
import { FaDroplet } from 'react-icons/fa6';
import { FiSun } from 'react-icons/fi';
import { PiWaves } from 'react-icons/pi';
import { Card, CardBody } from '@chakra-ui/react';

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState({});
  // // const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // You should adjust this code to handle data from your specific API.
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=sunrise,sunset,uv_index_max&current_weather=true&timezone=auto');
        const data = await response.json();
        console.log(data.current_weather);
        setWeatherData(data.current_weather);
        // setForecastData(data.forecast);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="main-page">
      <h2 className="city-heading">Berlin</h2>
      <p className="temperature-main">
        {Math.round(weatherData.temperature)}
        °
      </p>
      <div className="general-conditions">
        <h3>Sunny</h3>
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
                {weatherData.windspeed}
                km/h
              </p>
              <p>Wind</p>
            </div>
            <div className="humidity column">
              <FaDroplet size="2.3rem" />
              <p className="weatherdata">85%</p>
              <p>Humidity</p>
            </div>
            <div className="sunrise column">
              <FiSun size="2.3rem" />
              <p className="weatherdata">6:30</p>
              <p>Sunrise</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherDetails;
