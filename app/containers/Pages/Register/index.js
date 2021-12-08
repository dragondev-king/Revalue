import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Card, Grid, Button, Typography, makeStyles } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { classList } from 'utils/classList';
import { push } from 'connected-react-router';
import { register } from 'containers/Authentication/actions';

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

export function Register(props) {
  const classes = useStyles();
  const [form, setState] = useState({
    email: 'administrator@gmail.com',
    firstName: 'global',
    lastName: 'admin',
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
    props.register(form, props.push);
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ padding: '10vh 0vh' }}
      >
        <Grid container item justify="center">
          <Card className="position-relative">
            <Grid
              container
              direction="column"
              className="px-60 py-30 text-center"
            >
              <Grid item className="pb-60">
                <Typography variant="h4">Register</Typography>
              </Grid>
              <Grid item>
                <ValidatorForm onSubmit={onSubmit}>
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="First Name"
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    validators={['required']}
                    errorMessages={['This field is required']}
                  />
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Last Name"
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    validators={['required']}
                    errorMessages={['This field is required']}
                  />
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Email"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={form.email}
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
                  <div className="py-20">
                    <Button
                      className={classList({
                        'w-100 py-10': true,
                        [classes.button]: true,
                      })}
                      variant="contained"
                      type="submit"
                    >
                      Sign Up
                    </Button>
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
                Already have an account?
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: '14px' }}>
              <Button color="primary" onClick={() => props.push('/login')}>
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

Register.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    push: event => dispatch(push(event)),
    // eslint-disable-next-line no-shadow
    register: (args, push) => dispatch(register(args, push)),
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
)(Register);
