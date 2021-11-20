import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import { Redirect } from 'react-router';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';
import Spinner from './components/spinner/spinner.component';

import { GlobalStyle } from './global.styles';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop-page/shop-page.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/signin-and-signout-page/signin-and-signout-page.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />

            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/signin' render={() => currentUser ?
              (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
