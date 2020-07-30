import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Desktop from '@react-utils/web/surfaces/desktop'

function Routes() {
  const { path } = useRouteMatch()

  return (
    <Desktop.Content>
      <Switch>
        <Route path={`${path}/personal`}>
          <h2>My Account</h2>
        </Route>
        <Route path={`${path}/users`}>
          <h2>Users</h2>
        </Route>
        <Route path={`${path}/regions`}>
          <h2>Delivery Regions</h2>
        </Route>
      </Switch>
    </Desktop.Content>
  )
}

export default Routes;
