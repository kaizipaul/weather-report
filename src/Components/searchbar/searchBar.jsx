import React, { useState } from 'react';

const SearchBar = () => {
  const [city, setCity] = useState('');
  // this component takes in a name (string) and then sends a GET request to geocoding API
  // the results are then displayed, the lat & long are then sent as a GET request to the main API
  return (
    <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" type="text" />
  );
};
export default SearchBar;
