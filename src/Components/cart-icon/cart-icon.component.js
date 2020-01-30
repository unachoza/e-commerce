import React from 'react';
import { ReactComponent as ShoppingIcon } from './cart-icon.svg';
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
