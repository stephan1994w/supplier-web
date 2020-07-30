import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Desktop from '@react-utils/web/surfaces/desktop'

function Routes() {
  const { path } = useRouteMatch()

  return (
    <Desktop.Content>
      <Switch>
        <Route path={`${path}/general`}>
          <h2>Your Products</h2>
        </Route>
        <Route path={`${path}/alternate`}>
          <h2>Alternates</h2>
        </Route>
        <Route path={`${path}/brands`}>
          <h2>Brands</h2>
        </Route>
      </Switch>
    </Desktop.Content>
  )
}

export default Routes;
