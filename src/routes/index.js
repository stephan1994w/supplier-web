import React, { useMemo } from 'react';
import { useStore as useAuthStore } from '@sg-utils/auth/auth'

import { 
  Route, 
  Switch, 
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import Dashboard from '@modules/dashboard';
import Splashscreen from '@modules/auth/splashscreen';

import Quotes from '@modules/quotes/routes'
import Orders from '@modules/orders/routes'
import Account from '@modules/account/routes'
import Products from '@modules/products/routes'
import Authentication from '@modules/auth/routes';

import Desktop from '@react-utils/web/surfaces/desktop';

import TitleBar from '@supplier/core/controls/title-bar'
import Navigation from '@supplier/core/controls/navigation';

function Routes() {
  const { status, session } = useAuthStore();

  const path = useMemo(() => { 
    return session
      ? '/dashboard'
      : '/auth/sign-in'
  }, [session])

  if (status === 'unknown') {
    return <Splashscreen />;
  }

  return (
    <BrowserRouter>
      <Desktop>
        <Switch>
          <Route path={'/(dashboard|quote|order|product|account)'}>
            <TitleBar />
            <Navigation />
            <Switch>
              <Route path={'/dashboard'}>
                <Dashboard />
              </Route>
              <Route path={'/quote'}>
                <Quotes />
              </Route>
              <Route path={'/order'}>
                <Orders />
              </Route>
              <Route path={'/product'}>
                <Products />
              </Route>
              <Route path={'/account'}>
                <Account />
              </Route>
            </Switch>
          </Route>
          <Route path={'/auth'}>
            <Authentication />
          </Route>
          <Route path={'/'} exact>
            <Redirect to={path} />
          </Route>
        </Switch>
      </Desktop>
    </BrowserRouter>
  );
};

export default Routes;