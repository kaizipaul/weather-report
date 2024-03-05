import React from 'react';
import './myCities.css';
import { useDispatch, useSelector } from 'react-redux';
import { removefromlist } from '../../Redux/weatherdetails/detailsPage';

// Notes:
// 1. I got the logic wrong,
// 2. The state I am supposed to access is not state.details
// 3. maybe create a new state where I can push the added city details?

const MyCities = () => {
  const list = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const handleRemoveCity = (id) => {
    dispatch(removefromlist(id));
  };

  const filteredList = list.filter((city) => city.added).length === 0
    ? <p>No Cities Added</p>
    : list.filter((city) => city.added).map((city) => (
      <li key={city.id}>
        {city.name}
        {' '}
        -
        {city.description}
        <button type="button" onClick={() => handleRemoveCity(city.id)}>Remove</button>
      </li>
    ));

  return (
    <div className="section">
      <h2 className="header">MY CITIES</h2>
      <p className="details">{filteredList}</p>
    </div>
  );
};

export default MyCities;
