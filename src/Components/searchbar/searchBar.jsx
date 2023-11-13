import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cityList, getCityName } from '../../Redux/search/searchBar';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const getCity = useSelector(cityList);

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
