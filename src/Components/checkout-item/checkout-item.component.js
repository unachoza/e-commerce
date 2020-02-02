import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import {createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CheckoutItem = ({ cartItem : {name, imageUrl, price, quantity}}) => (
  <div className="checkout-item">
    <div className="image-container">
    <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
   <div className="remove-button">
     &#10005;
   </div>
    </div>

)
const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutItem)