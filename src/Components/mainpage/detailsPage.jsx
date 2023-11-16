import React, { useEffect } from 'react';
import './detailspage.css';
import { useSelector, useDispatch } from 'react-redux';
import { FiDroplet } from 'react-icons/fi';
import { PiWaves, PiThermometerHot } from 'react-icons/pi';
import { Card, CardBody } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getWeatherDetails, initialState } from '../../Redux/weatherdetails/detailsPage';

const WeatherDetails = () => {
  // fetch state from redux store
  const details = useSelector((state) => state.details);
  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getWeatherDetails(id.id));
      } catch (error) {
        throw error('Error fetching weather details:', error);
      }
    };

    fetchData();
  }, [dispatch, id]);

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
            {Math.round(details.temperature)}
            °
          </p>
          <div className="general-conditions">
            <h3>{details.conditions}</h3>
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
                    {Math.round(details.wind)}
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
                    {Math.round(details.heatindex)}
                    °
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
