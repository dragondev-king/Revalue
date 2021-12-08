import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Card,
  Grid,
  Button,
  makeStyles,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import {
  makeSelectAuthentication,
  makeSelectIsGettingAuthentication,
} from 'containers/Authentication/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/Authentication/reducer';
import { logIn } from 'containers/Authentication/actions';
import { push } from 'connected-react-router';
import { classList } from 'utils/classList';
import { injectIntl } from 'react-intl';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonProgress: {
    position: 'absolute',
    top: '84%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export function LoginPage(props) {
  useInjectReducer({ key: 'authentication', reducer });
  const classes = useStyles();
  const [form, setState] = useState({
    username: 'administrator@gmail.com',
    password: '123456',
  });

  const handleChange = e => {
    e.persist();

    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function onSubmit() {
    props.logIn(form);
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ padding: '10vh 0vh' }}
      >
        <Grid container item justify="center">
          <Card className="signup-card position-relative">
            <Grid
              container
              direction="column"
              className="px-60 py-30 text-center"
            >
              <Grid item className="pb-60">
                <Typography variant="h4">Sign in</Typography>
              </Grid>
              <Grid item>
                <ValidatorForm onSubmit={onSubmit}>
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Email"
                    onChange={handleChange}
                    type="email"
                    name="username"
                    value={form.username}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'This field is required',
                      'Email is not valid',
                    ]}
                  />
                  <TextValidator
                    className="mb-16 w-100"
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={form.password}
                    validators={['required']}
                    errorMessages={['This field is required']}
                  />
                  <div className="text-align-right">
                    <Button
                      className="text-primary"
                      onClick={() => props.push('/forgot-password')}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <div className="py-20">
                    <Button
                      className={classList({
                        'w-100 py-10': true,
                        [classes.button]: true,
                      })}
                      variant="contained"
                      disabled={props.loading}
                      type="submit"
                    >
                      Sign in
                    </Button>
                    {props.loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </ValidatorForm>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Grid container justify="center" direction="row">
            <Grid item className="pr-20 pt-20">
              <Typography variant="body1" color="textPrimary">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't have an account?
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: '14px' }}>
              <Button color="primary" onClick={() => props.push('/register')}>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  authentication: makeSelectAuthentication(),
  loading: makeSelectIsGettingAuthentication(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: event => dispatch(push(event)),
    logIn: args => dispatch(logIn(args)),
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
)(LoginPage);
