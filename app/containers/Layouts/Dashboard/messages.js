import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Dashboard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Dashboard container!',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
  account: {
    id: `${scope}.account`,
    defaultMessage: 'Account',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  overview: {
    id: `${scope}.overview`,
    defaultMessage: 'Overview',
  },
  analytics: {
    id: `${scope}.analytics`,
    defaultMessage: 'Analytics',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
  analysis: {
    id: `${scope}.analysis`,
    defaultMessage: 'Analysis',
  },
  administration: {
    id: `${scope}.administration`,
    defaultMessage: 'Administration',
  },
  users: {
    id: `${scope}.users`,
    defaultMessage: 'Users',
  },
  website: {
    id: `${scope}.website`,
    defaultMessage: 'Real Estate Analytics',
  },
  copyright: {
    id: `${scope}.copyright`,
    defaultMessage: 'Copyright © ',
  },
  brand: {
    id: `${scope}.brand`,
    defaultMessage: 'Real Estate Analytics',
  },
});
