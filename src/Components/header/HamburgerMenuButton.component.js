import React from 'react';
import { HamburgerMenu } from './header.styles';
import hamburgerMenu from '../../assests/hamburgerMenu.png'

const HamburgerMenuButton = () => <HamburgerMenu>
<img src={hamburgerMenu} />
</HamburgerMenu>;

export default HamburgerMenuButton;
