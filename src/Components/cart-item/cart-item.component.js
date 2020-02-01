import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import './cart-item.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
);

const mapStateToProps = () => {};

export default connect(mapStateToProps)(CartItem);
