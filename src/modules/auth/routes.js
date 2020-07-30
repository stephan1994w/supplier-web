import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import SignIn from './sign-in'

function Routes() {
  const { path } = useRouteMatch()
  
  return (
    <Switch>
      <Route path={`${path}/sign-in`}>
        <SignIn />
      </Route>
    </Switch>
  );
};

export default Routes;