import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signout-page/signin-and-signout-page.component';
import { Redirect } from 'react-router';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';

import { GlobalStyle } from './global.styles';

const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/signin' render={() => currentUser ?
          (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

export default App;
