import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import { makeSelectAuthenticated } from '../selectors';
import reducer from '../reducer';
import { useInjectReducer } from '../../../utils/injectReducer';

const key = 'authentication';

export function PublicRoute({
  component: Component,
  restricted,
  authenticated,
  ...rest
}) {
  useInjectReducer({ key, reducer });
  if (authenticated && restricted) {
    rest.push('/fixandflip');
  } else {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
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
)(PublicRoute);
