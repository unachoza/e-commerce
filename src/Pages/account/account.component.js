import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './account.styles.scss';

const AccountPage = ({ currentUser }) => (
  <div className="account-page">
    <div className="account-page">Hello, {currentUser.displayName.toUpperCase()} this is your Account</div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AccountPage);

////////Maybe add later when you have more time//////

// import MySize from '../../Components/my-size/my-size.component'
// import Orders from '../../Components/orders/orders.component'
{
  /* <div className="side-nav">
  <MySize />
  <Orders />
  <dialog close>Find Your Size</dialog>
</div> */
}
