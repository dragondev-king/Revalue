import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import { makeSelectAuthenticated } from '../selectors';
import reducer from '../reducer';

const key = 'authentication';

export function PrivateRoute({ component: Component, authenticated, ...rest }) {
  useInjectReducer({ key, reducer });
  if (authenticated) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  rest.push('/login');
}

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
});

const withConnect = connect(
  mapStateToProps,
  { push },
);

export default compose(
  withConnect,
  memo,
)(PrivateRoute);
