import React from 'react';
import { HamburgerMenu } from './header.styles';
import { connect } from 'react-redux';
import { toggleMenuHidden } from '../../redux/menu/menu.actions';
import hamburgerMenu from '../../assests/hamburgerMenu.png';


const style = {
  height: '100%',
  width: '50px',
  padding: '0',
};

const HamburgerMenuButton = ({toggleMenuHidden}) => (
  <HamburgerMenu onClick={toggleMenuHidden}>
    <img src={hamburgerMenu} style={style} alt="hamburger menu" />
  </HamburgerMenu>
);
const mapDispatchtoProps = dispatch => ({
  toggleMenuHidden: () => dispatch(toggleMenuHidden()),
});


export default connect(null, mapDispatchtoProps)(HamburgerMenuButton);
