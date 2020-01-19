import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/Homepage';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/Header.component';
import SignInAndSignUp from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      currentUser : null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    console.log(user)
      
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
