import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NotFound from 'containers/Pages/NotFound/Loadable';
import PrivateRoute from 'containers/Authentication/routes/privateRoute';
import PublicRoute from 'containers/Authentication/routes/publicRoute';
import ThemeProvider from 'containers/ThemeProvider';
import 'styles/_app.scss';
import { pages } from './pages';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Switch>
          {pages.map(route => (
            <Route
              key={route.layout}
              exact={route.subRoutes.some(r => r.exact)}
              path={route.subRoutes.map(r => r.path)}
            >
              <route.layout>
                {route.subRoutes.map(subRoute => {
                  if (subRoute.private) {
                    return (
                      <PrivateRoute
                        key={subRoute.path}
                        restricted={subRoute.restricted}
                        component={subRoute.component}
                        path={subRoute.path}
                        exact={subRoute.exact}
                      />
                    );
                  }
                  return (
                    <PublicRoute
                      key={subRoute.path}
                      restricted={subRoute.restricted}
                      component={subRoute.component}
                      path={subRoute.path}
                      exact={subRoute.exact}
                    />
                  );
                })}
              </route.layout>
            </Route>
          ))}
          <Route path="*">
            <Switch>
              <Route component={NotFound} />
            </Switch>
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}
