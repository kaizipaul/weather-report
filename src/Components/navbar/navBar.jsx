/* eslint-disable import/no-extraneous-dependencies */
import './navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';

import {
  HamburgerIcon, StarIcon, Search2Icon, SettingsIcon,
} from '@chakra-ui/icons';

import { FaGithub } from 'react-icons/fa6';

const NavBar = () => (
  <div className="navigation">
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <NavLink className="links" to="/mycities">
          <MenuItem icon={<StarIcon />}>
            My Cities
          </MenuItem>
        </NavLink>
        <MenuItem icon={<Search2Icon />}>
          Search
        </MenuItem>
        <MenuItem icon={<FaGithub />}>
          View Source Code
        </MenuItem>
        <MenuItem icon={<SettingsIcon />}>
          Settings
        </MenuItem>
      </MenuList>
    </Menu>
    <div>
      <NavLink to="/search">
        <Search2Icon />
      </NavLink>
    </div>
  </div>
);

export default NavBar;
