import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sheet from 'react-modal-sheet';
// import { Link } from 'react-router-dom';
import {
  Input, List, ListItem, ListIcon, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { FaLocationArrow } from 'react-icons/fa6';
import { getCityName, initialState } from '../../Redux/search/searchBar';
import './searchBar.css';
import WeatherDetails from '../detailspage/detailsPage';

function Search() {
  // local state to store the searched item
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [isOpen, setOpen] = useState(false);
  // dispatch function to execute an action from the search reducer
  const dispatch = useDispatch();
  // accessing the reducer state
  const getCity = useSelector((state) => state.search);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getCityName(searchTerm)); // this is a function called from Redux
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setOpen(true);
  };

  return (
    <div className="search-container">
      <h3 className="header">SEARCH</h3>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} rootId="root">
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              {selectedCity && <WeatherDetails id={selectedCity.id} />}
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          variant="filled"
          placeholder="Search for a city or airport"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <div className="details">
        {getCity === initialState ? (
          <div><p>No results</p></div>) : (
            <List>
              {getCity.map((city) => (
                <ListItem key={city.id} className="list">
                  <ListIcon as={FaLocationArrow} />
                  <button type="button" onClick={() => handleCityClick(city)}>
                    {city.name}
                    ,
                    {' '}
                    {city.country}
                  </button>
                </ListItem>
              ))}
            </List>
        )}
      </div>
    </div>
  );
}

export default Search;
