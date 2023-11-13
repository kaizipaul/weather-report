import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityName } from '../../Redux/search/searchBar';

function Search() {
  // local state to store the searched item
  const [searchTerm, setSearchTerm] = useState('');
  // dispatch function to execute an action from the search reducer
  const dispatch = useDispatch();
  // accessing the reducer state
  const getCity = useSelector((state) => state.search);
  console.log(getCity);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getCityName(searchTerm));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      dispatch(getCityName(searchTerm));
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter a city name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {getCity.length > 0 && (
        <ul>
          {getCity.map((getCity) => (
            <li key={getCity.id}>{getCity.name}</li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
