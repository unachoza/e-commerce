import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import './cart-item.styles.scss';
import { connect } from 'react-redux';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  console.log("thisisiwhat i am looking for", imageUrl, name, price, quantity)
  return (
    <div className="cart-item">
    <img src={imageUrl} alt="" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
  )
}
 


export default (CartItem);
