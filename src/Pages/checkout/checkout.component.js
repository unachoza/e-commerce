import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../Components/checkout-item/checkout-item.component'
import StripeButton from '../../Components/stripe-button/stripe-button.component'

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
    
    {cartItems.map(cartItem =>
      <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div className="total">TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
  
  
})
export default withRouter(connect(mapStateToProps)(CheckoutPage));
