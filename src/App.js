import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/Homepage';
import ShopPage from './Pages/shop/shop.component';
import AccountPage from './Pages/account/account.component'
import Header from './Components/header/Header.component';
import SignInAndSignUp from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import CheckoutPage from './Pages/checkout/checkout.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector'

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}
          />
          <Route path="/account" component={AccountPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
