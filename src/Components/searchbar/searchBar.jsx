import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Input, List, ListItem, ListIcon,
} from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa6';
import { getCityName, initialState } from '../../Redux/search/searchBar';
import './searchBar.css';
// import WeatherDetails from '../mainpage/detailsPage';

function Search() {
  // local state to store the searched item
  const [searchTerm, setSearchTerm] = useState('');
  // dispatch function to execute an action from the search reducer
  const dispatch = useDispatch();
  // accessing the reducer state
  const getCity = useSelector((state) => state.search);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getCityName(searchTerm));
  };

  return (
    <div className="search-container">
      <h3 className="header">SEARCH</h3>
      <Input
        variant="filled"
        placeholder="Enter a city name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="details">
        {getCity === initialState ? (
          <div><p>No results</p></div>) : (
            <List>
              {getCity.map((city) => (
                <ListItem key={city.id} className="list">
                  <ListIcon as={FaLocationArrow} />
                  <Link className="links" to={`/details/${city.id}`}>
                    {city.name}
                    ,
                    {' '}
                    {city.country}
                  </Link>
                </ListItem>
              ))}
            </List>
        )}
      </div>
    </div>
  );
}

export default Search;
