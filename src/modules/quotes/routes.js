import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Desktop from '@react-utils/web/surfaces/desktop'

function Routes() {
  const { path } = useRouteMatch()

  return (
    <Desktop.Content>
      <Switch>
        <Route path={`${path}/requests`}>
          <h2>Quote Requests</h2>
        </Route>
        <Route path={`${path}/submitted`}>
          <h2>Submitted Quotes</h2>
        </Route>
        <Route path={`${path}/settings`}>
          <h2>Quote Settings</h2>
        </Route>
      </Switch>
    </Desktop.Content>
  )
}

export default Routes