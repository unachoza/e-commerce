import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectMenuHidden } from '../../redux/menu/menu.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, MobileContainer } from './header.styles';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import HamburgerMenuButton from './HamburgerMenuButton.component';
import MobileMenu from './MobileMenu.component';

const Header = ({ currentUser, cartHidden, menuHidden }) => (
  <HeaderContainer>
    <HamburgerMenuButton />
    {menuHidden ? null : <MobileMenu />}
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
   
    <OptionsContainer>
      <MobileContainer>
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
      </MobileContainer>

      <CartIcon className="options" />
    </OptionsContainer>
    {cartHidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  menuHidden: selectMenuHidden,
});

export default connect(mapStateToProps)(Header);
