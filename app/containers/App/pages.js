import Overview from 'containers/Pages/Overview/Loadable';
import Dashboard from 'containers/Layouts/Dashboard/Loadable';
import Login from 'containers/Pages/Login/Loadable';
import Settings from 'containers/Pages/Settings';
import Account from 'containers/Pages/Account';
import Register from 'containers/Pages/Register';
import Simple from 'containers/Layouts/Simple';
import Analysis from 'containers/Pages/Analysis';

export const pages = [
  {
    layout: Simple,
    subRoutes: [
      {
        path: '/login',
        component: Login,
        exact: true,
        private: false,
        restricted: false,
      },
      {
        path: '/register',
        component: Register,
        exact: true,
        private: false,
        restricted: false,
      },
    ],
  },
  {
    layout: Dashboard,
    subRoutes: [
      {
        path: '/overview',
        component: Overview,
        exact: true,
        private: false,
        restricted: false,
      },
      {
        path: '/analysis',
        component: Analysis,
        exact: true,
        private: false,
        restricted: false,
      },
      {
        path: '/account',
        component: Account,
        exact: true,
        private: false,
        restricted: false,
      },
      {
        path: '/settings',
        component: Settings,
        exact: true,
        private: false,
        restricted: false,
      },
    ],
  },
];
