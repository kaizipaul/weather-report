import React, { useEffect } from 'react';
import './detailspage.css';
import { useSelector, useDispatch } from 'react-redux';
// import { FiDroplet } from 'react-icons/fi';
// import { PiWaves, PiThermometerHot } from 'react-icons/pi';
import {
  Card, CardHeader, CardBody, Grid, GridItem, Skeleton, Divider,
} from '@chakra-ui/react';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import { PiWind, PiThermometerHotDuotone } from 'react-icons/pi';
import { FaEye } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
// import { useParams } from 'react-router-dom';
import convertTo24 from './timeConversion';
import Footer from '../footer/footer';
import { getWeatherDetails, initialState } from '../../Redux/weatherdetails/detailsPage';

// eslint-disable-next-line react/prop-types
const WeatherDetails = ({ id }) => {
  // fetch state from redux store
  const details = useSelector((state) => state.details);
  // const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getWeatherDetails(id));
      } catch (error) {
        throw error('Error fetching weather details:', error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  return (
    <>
      <div>
        {details === initialState ? (
          <Skeleton borderRadius="lg">
            <div className="box" />
          </Skeleton>
        ) : (
          <>
            <div className="main-page">
              <h2 className="city-heading">{details.name && details.name.toUpperCase()}</h2>
              <p className="temperature-main">
                {Math.round(details.temperature)}
                °
              </p>
              <div className="conditions">
                <h3 className="general-conditions">{details.conditions}</h3>
                <p>
                  H:
                  {Math.round(details.temp_high)}
                  °
                  {'   '}
                  L:
                  {Math.round(details.temp_low)}
                  °
                </p>
              </div>
              <Grid templateColumns="repeat(2, 1fr)" gap={7}>
                <GridItem colSpan={2} w="100%" h="152">
                  <Card bg="blackAlpha.200">
                    <CardHeader>
                      <p className="card-header">
                        <PiWind />
                        WIND
                      </p>
                    </CardHeader>
                    <CardBody padding="3.5" paddingBottom="0" className="wrapper">
                      <div className="card-details-wind">
                        <p className="flex">
                          {Math.round(details.wind)}
                          <p className="card-subtext">
                            <p>
                              KM/H
                            </p>
                            <p className="label">
                              Wind
                            </p>
                          </p>
                        </p>
                        <Divider color="blackAlpha.900" width="10" />
                        <p className="flex">
                          {Math.round(details.gusts)}
                          <p className="card-subtext">
                            <p>
                              KM/H
                            </p>
                            <p className="label">
                              Gusts
                            </p>
                          </p>
                        </p>
                      </div>
                      <div className="compass">
                        <p className="wind-deg">
                          {details.wind_deg}
                          °
                        </p>
                        <p className="card-subtext-dir">
                          {details.wind_dir}
                          <p className="label">
                            Direction
                          </p>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem w="100%" h="130">
                  <Card bg="blackAlpha.200">
                    <CardHeader>
                      <p className="card-header">
                        <PiThermometerHotDuotone />
                        FEELS LIKE
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
                <GridItem w="100%" h="120">
                  <Card bg="blackAlpha.200">
                    {details.is_sun_up === 1 && (
                    <>
                      <CardHeader>
                        <p className="card-header">
                          <BsFillSunriseFill />
                          SUNRISE
                        </p>
                      </CardHeader>
                      <CardBody paddingBottom="0">
                        <p className="card-details-sun">
                          {convertTo24(details.sunrise)}
                          <p className="card-subtext-sun">
                            Sunset:
                            {' '}
                            {convertTo24(details.sunset)}
                          </p>
                        </p>
                      </CardBody>
                    </>
                    )}
                    {details.is_sun_up === 0 && (
                    <>
                      <CardHeader>
                        <p className="card-header">
                          <BsFillSunsetFill />
                          SUNSET
                        </p>
                      </CardHeader>
                      <CardBody paddingBottom="0">
                        <p className="card-details-sun">
                          {convertTo24(details.sunset)}
                          <p className="card-subtext-sun">
                            Sunrise:
                            {' '}
                            {convertTo24(details.sunrise)}
                          </p>
                        </p>
                      </CardBody>
                    </>
                    )}
                  </Card>
                </GridItem>
                <GridItem w="100%" h="130">
                  <Card bg="blackAlpha.200">
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
                  <Card bg="blackAlpha.200">
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
            <Divider color="black" />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default WeatherDetails;
