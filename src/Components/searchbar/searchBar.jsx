import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '@chakra-ui/react';
import { getCityName, initialState } from '../../Redux/search/searchBar';
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
      <Input
        variant="filled"
        placeholder="Enter a city name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {getCity === initialState ? (
          <div><p>No results</p></div>) : (
            <ul>
              {getCity.map((city) => (
                <li key={city.id}>
                  <Link className="links" to={`/details/${city.id}`}>
                    {city.name}
                    ,
                    {' '}
                    {city.country}
                  </Link>
                </li>
              ))}
            </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
