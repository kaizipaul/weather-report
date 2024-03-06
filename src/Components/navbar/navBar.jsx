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
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { BsSunFill } from 'react-icons/bs';
import {
  HamburgerIcon, StarIcon, Search2Icon, SettingsIcon, MoonIcon,
} from '@chakra-ui/icons';

import { FaGithub } from 'react-icons/fa6';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="navigation">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
        />
        <MenuList>
          <NavLink className="links" to="/">
            <MenuItem icon={<StarIcon />}>
              My Cities
            </MenuItem>
          </NavLink>
          <NavLink className="links" to="/search">
            <MenuItem icon={<Search2Icon />}>
              Search
            </MenuItem>
          </NavLink>
          <MenuItem icon={<FaGithub />}>
            View Source Code
          </MenuItem>
          <MenuItem icon={<SettingsIcon />}>
            Settings
          </MenuItem>
        </MenuList>
      </Menu>
      <div className="theme">
        {colorMode === 'light' && (
        <Button as={IconButton} colorScheme="blackAlpha" variant="ghost" icon={<MoonIcon />} onClick={toggleColorMode} />
        )}
        {colorMode === 'dark' && (
          <Button as={IconButton} icon={<BsSunFill />} colorScheme="white" variant="ghost" onClick={toggleColorMode} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
