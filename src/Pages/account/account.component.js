import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './account.styles.scss';

const AccountPage = ({ currentUser }) => (
  <div className="account-page">Hello, {currentUser.displayName.toUpperCase()} this is your Account</div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AccountPage);
