import React, { useEffect, useState } from 'react';
import './detailspage.css';

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    // Fetch weather data from an API, you may replace this with your own API.
    // For simplicity, let's assume the API returns an object with the following format:
    // {
    //   cityName: string,
    //   temperature: number,
    //   windSpeed: number,
    //   humidity: number,
    //   sunrise: string, // format: "hh:mm:ss"
    //   sunset: string, // format: "hh:mm:ss"
    //   forecast: array of objects with forecast data for the next 5 days
    // }
    // You should adjust this code to handle data from your specific API.
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=sunrise,sunset,uv_index_max&current_weather=true&timezone=auto');
        const data = await response.json();
        setWeatherData(data);
        setForecastData(data.forecast);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="main-page">
      {/* <h2>{weatherData.cityName}</h2> */}
      <p>
        Temperature:
        {' '}
        {weatherData.current_weather.temperature}
        °C
      </p>
      <div>
        <h3>Wind Speed</h3>
        <p>
          {weatherData.current_weather.windspeed}
          {' '}
          km/h
        </p>
      </div>
      <div>
        <h3>Humidity</h3>
        <p>
          {weatherData.humidity}
          %
        </p>
      </div>
      <div>
        <h3>Sunrise/Sunset</h3>
        <p>
          Sunrise:
          {' '}
          {weatherData.sunrise}
        </p>
        <p>
          Sunset:
          {' '}
          {weatherData.sunset}
        </p>
      </div>
      <div>
        <h3>5 Day Weather Forecast</h3>
        <ul>
          {forecastData}
        </ul>
      </div>
    </div>
  );
};

export default WeatherDetails;
