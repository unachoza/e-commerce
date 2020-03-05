import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { selectMenuHidden } from '../../redux/menu/menu.selectors';
import { HamburgerMenu, OptionLink } from './header.styles';

const MobileMenu = ({ currentUser, menuHidden }) => {
  console.log('is menu hidden', menuHidden);
  return (
    <HamburgerMenu>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser && <OptionLink to="/account">ACCOUNT</OptionLink>}
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
    </HamburgerMenu>
  );
};
const mapStateToProps = createStructuredSelector({
  menuHidden: selectMenuHidden,
});
export default connect(mapStateToProps)(MobileMenu);
