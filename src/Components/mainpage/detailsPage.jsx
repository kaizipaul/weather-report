import React, { useEffect } from 'react';
import './detailspage.css';
import { useSelector, useDispatch } from 'react-redux';
import { FiDroplet } from 'react-icons/fi';
import { PiWaves, PiThermometerHot } from 'react-icons/pi';
import { Card, CardBody } from '@chakra-ui/react';
import { getWeatherDetails, initialState } from '../../Redux/weatherdetails/detailsPage';

const WeatherDetails = () => {
  const details = useSelector((state) => state.weatherDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherDetails());
  }, []);

  return (
    <div>
      {details === initialState ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="main-page">
          <h2 className="city-heading">{details.name}</h2>
          <p className="temperature-main">
            {Math.round(details.temp_c)}
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
                    {Math.round(details.wind_kph)}
                    km/h
                  </p>
                </div>
                <div className="humidity column">
                  <FiDroplet size="2.3rem" />
                  <p className="weatherdata">
                    {details.humidity}
                    %
                  </p>
                </div>
                <div className="sunrise column">
                  <PiThermometerHot size="2.3rem" />
                  <p className="weatherdata">
                    {Math.round(details.feelslike_c)}
                    °
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
      ;
    </div>
  );
};

export default WeatherDetails;
