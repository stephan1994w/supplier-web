import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Desktop from '@react-utils/web/surfaces/desktop'

function Routes() {
  const { path } = useRouteMatch()

  return (
    <Desktop.Content>
      <Switch>
        <Route path={`${path}/requests`}>
          <h2>Order Requests</h2>
        </Route>
        <Route path={`${path}/confirmed`}>
          <h2>Confirmed Orders</h2>
        </Route>
        <Route path={`${path}/returns`}>
          <h2>Returns</h2>
        </Route>
      </Switch>
    </Desktop.Content>
  )
}

export default Routes;
