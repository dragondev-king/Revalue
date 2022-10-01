import React, { memo, useEffect } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import messages from './messages';

export function NotFound(props) {
  useEffect(() => {
    props.push('/fixandflip');
  }, []);

  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    push: event => dispatch(push(event)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  injectIntl,
)(NotFound);
