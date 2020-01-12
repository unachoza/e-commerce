import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/homepage/Homepage'
import ShopPage from './Pages/shop/shop.component'
import Header from './Components/header/Header.component'
import SignInAndSignUp from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
   
  );
}

export default App;
