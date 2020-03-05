import React from 'react';
import { HamburgerMenu } from './header.styles';
import hamburgerMenu from '../../assests/hamburgerMenu.png';

const style = {
  height: '100%',
  width: '50px',
  padding: '0',
};

const HamburgerMenuButton = () => (
  <HamburgerMenu>
    <img src={hamburgerMenu} style={style} alt="hamburger menu" />
  </HamburgerMenu>
);

export default HamburgerMenuButton;
