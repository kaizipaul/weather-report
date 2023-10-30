import React, { useEffect } from 'react';
import './WeatherCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherCard } from '../../Redux/weatherCard/weatherCard';

const WeatherCard = () => {
  const card = useSelector((state) => state.weatherCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherCard());
  }, []);

  return (
    <div className="weather-card">
      <h2>
        {card.name}
        {' '}
        Weather
      </h2>
      <p>
        Temperature:
        {card.temperature}
        °C
      </p>
      <p>
        Conditions:
        {card.conditions}
      </p>
      <p>
        High:
        {card.humidity}
        °C
      </p>
      <p>
        Low:
        {card.humidity}
        °C
      </p>
    </div>
  );
};

export default WeatherCard;
