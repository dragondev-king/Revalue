import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { Button, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {
  makeSelectAccount,
  makeSelectIsGettingAccount,
  makeSelectIsUpdatingAccount,
} from './selectors';
import reducer from './reducer';
import messages from './messages';
import { getAccountByUsername, updateAccount } from './actions';
import InputText from '../../../components/InputText';
import { makeSelectUser } from '../../Authentication/selectors';

export function Account(props) {
  useInjectReducer({ key: 'account', reducer });

  const [state, setState] = useState({
    info: {},
    editing: false,
  });

  useEffect(() => {
    if (props.user) {
      props.getAccountByUsername(props.user.email);
    }
  }, []);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        ...props.account,
      },
    }));
  }, [props.account]);

  const handleEditButton = () => {
    setState(prevState => ({
      ...prevState,
      editing: true,
    }));
  };

  const handleCancelButton = () => {
    setState(prevState => ({
      ...prevState,
      info: {
        firstName: '',
        lastName: '',
        industry: '',
        ...props.account,
      },
      editing: false,
    }));
  };

  const handleSaveButton = () => {
    props.updateAccount(state.info, () => {
      setState(prevState => ({
        ...prevState,
        editing: false,
      }));
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <Helmet>
        <title>Account</title>
        <meta name="description" content="Description of Account" />
      </Helmet>
      {props.isGettingAccount && props.user ? (
        <Skeleton variant="rect" />
      ) : (
        <Grid container>
          {!state.editing && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditButton}
              >
                {props.intl.formatMessage({ ...messages.edit })}
              </Button>
            </Grid>
          )}
          {state.editing && (
            <Grid container>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={props.isUpdatingAccount}
                  onClick={handleCancelButton}
                >
                  {props.intl.formatMessage({ ...messages.cancel })}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={props.isUpdatingAccount}
                  onClick={handleSaveButton}
                >
                  {props.intl.formatMessage({ ...messages.save })}
                </Button>
              </Grid>
            </Grid>
          )}
          <Grid item>
            <InputText
              disabled={!state.editing}
              label="firstName"
              name="firstName"
              value={state.info.firstName}
              controlFunc={handleChange}
            />
          </Grid>
          <Grid item>
            <InputText
              disabled={!state.editing}
              label="lastName"
              name="lastName"
              value={state.info.lastName}
              controlFunc={handleChange}
            />
          </Grid>
          <Grid item>
            <InputText
              disabled={!state.editing}
              label="industry"
              name="industry"
              value={state.info.industry}
              controlFunc={handleChange}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  account: makeSelectAccount(),
  isUpdatingAccount: makeSelectIsUpdatingAccount(),
  isGettingAccount: makeSelectIsGettingAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAccountByUsername: username => dispatch(getAccountByUsername(username)),
    updateAccount: (info, onSuccess) =>
      dispatch(updateAccount(info, onSuccess)),
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
)(Account);
