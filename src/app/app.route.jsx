import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/404/404';

const TrangChuContainer = React.lazy(() => import('./routes/container/home/trang-chu.container'));
const LoginContainer = React.lazy(() => import('./routes/container/auth/login.container'));

export default class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.routes = [
      {
        path: '/',
        component: TrangChuContainer,
        exact: true,
        index: 0,
      },
      {
        path: '/login',
        component: LoginContainer,
        exact: true,
        index: 1,
      },
    ];
  }

  renderRoutes() {
    return this.routes.map((route) => {
      const RouteComponent = route.component;
      return (
        <Route
          key={route.index}
          path={route.path}
          render={(props) => <RouteComponent {...this.props} {...props} />}
          exact={route.exact}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div> Loading.. </div>}>
          <Switch>
            {this.renderRoutes()}
            <Route
              render={(props) => <NotFound {...this.props} {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
