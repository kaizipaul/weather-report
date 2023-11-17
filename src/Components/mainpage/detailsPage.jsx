import React, { useEffect } from 'react';
import './detailspage.css';
import { useSelector, useDispatch } from 'react-redux';
// import { FiDroplet } from 'react-icons/fi';
// import { PiWaves, PiThermometerHot } from 'react-icons/pi';
import {
  Card, CardHeader, CardBody, Grid, GridItem,
} from '@chakra-ui/react';
import { PiWind, PiThermometerHotDuotone } from 'react-icons/pi';
import { FaEye } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
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
          <h2 className="city-heading">{details.name && details.name.toUpperCase()}</h2>
          <h3 className="general-conditions">{details.conditions}</h3>
          <p className="temperature-main">
            {Math.round(details.temperature)}
            °
          </p>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%" h="130">
              <Card bg="gray.200">
                <CardHeader>
                  <p className="card-header">
                    <PiWind />
                    WIND SPEED
                  </p>
                </CardHeader>
                <CardBody>
                  <p className="card-details">
                    {Math.round(details.wind)}
                    kph
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem w="100%" h="130">
              <Card bg="gray.200">
                <CardHeader>
                  <p className="card-header">
                    <PiThermometerHotDuotone />
                    HEAT INDEX
                  </p>
                </CardHeader>
                <CardBody>
                  <p className="card-details">
                    {Math.round(details.heatindex)}
                    °
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem w="100%" h="130">
              <Card bg="gray.200">
                <CardHeader>
                  <p className="card-header">
                    <FaEye />
                    VISIBILITY
                  </p>
                </CardHeader>
                <CardBody>
                  <p className="card-details">
                    {details.visibility}
                    km
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem w="100%" h="130">
              <Card bg="gray.200">
                <CardHeader>
                  <p className="card-header">
                    <FaDroplet />
                    PRECIPITATION
                  </p>
                </CardHeader>
                <CardBody>
                  <p className="card-details">
                    {details.precipitation}
                    mm
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem w="100%" h="130" />
          </Grid>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
