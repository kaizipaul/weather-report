import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityName, initialState } from '../../Redux/search/searchBar';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const getCity = useSelector((state) => state.searchBar);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityName(searchTerm));
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
        {getCity === initialState ? (
          <div>
            <p>no results</p>
          </div>
        ) : (
          <div>
            <p>{getCity.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
