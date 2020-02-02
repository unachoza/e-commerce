import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>Product</span>
      </div>

      <div className="checkout-block">
        <span>Description</span>
      </div>

      <div className="checkout-block">
        <span>Quantity</span>
      </div>

      <div className="checkout-block">
        <span>Price</span>
      </div>

      <div className="checkout-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => cartItem.name)}
    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
  
  
})
export default withRouter(connect(mapStateToProps)(CheckoutPage));
