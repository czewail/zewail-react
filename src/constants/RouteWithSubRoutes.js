import React from 'react'
import { Route } from 'react-router-dom'

// 把 <Route> 组件像这样包一层，然后在需要使用 <Route> 的地方使用 <RouteWithSubRoutes>
// 子路由可以加到任意路由组件上。
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact ? true : false} render={props => (
    <route.component {...props} routes={route.routes ? route.routes : null} />
  )} />
)

export default RouteWithSubRoutes
