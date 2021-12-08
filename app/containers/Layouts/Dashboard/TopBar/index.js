/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Menu from 'components/Menu';
import {
  MenuItem,
  IconButton,
  Icon,
  Grid,
  Typography,
} from '@material-ui/core';
import { logOut } from 'containers/Authentication/actions';
import { FormattedMessage } from 'react-intl';
import { isMdScreen } from 'utils/isMdScreen';
import { classList } from 'utils/classList';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUser,
  makeSelectAuthenticated,
} from 'containers/Authentication/selectors';
import messages from '../messages';
import reducer from '../reducer';
import { useInjectReducer } from '../../../../utils/injectReducer';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  fixed: {
    backgroundColor: 'white',
  },
  item: {
    paddingLeft: '16px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  menuItem: {
    minWidth: '185',
    alignItems: 'center',
    display: 'flex',
  },
}));

export function TopBar(props) {
  const classes = useStyles();

  useInjectReducer({ key: 'dashboard', reducer });

  const handleSignOut = () => {
    props.logOut(props.push);
  };

  const handleSidebarToggle = () => {
    let mode;
    if (isMdScreen()) {
      mode = 'mobile';
    } else {
      mode = 'full';
    }
    props.setMode(mode);
  };

  return (
    <div className="topbar">
      <div
        className={classList({
          'topbar-hold': true,
          [classes.fixed]: true,
        })}
      >
        <Grid container alignContent="space-between" alignItems="center">
          <Grid item>
            <IconButton onClick={handleSidebarToggle} className="hide-on-lg">
              <Icon>menu</Icon>
            </IconButton>
          </Grid>
          <Grid container item xs alignItems="center" justify="flex-end">
            <Grid item>
              <Typography variant="subtitle1">
                {props.user ? props.user.username : ''}
              </Typography>
            </Grid>
            <Grid item>
              <Menu
                menuButton={
                  <IconButton className="text-middle cursor-pointer">
                    <Icon className="font-size-30">account_circle</Icon>
                  </IconButton>
                }
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={() => props.push('/overview')}
                >
                  <Icon>home</Icon>
                  <span className={classes.item}>
                    <FormattedMessage {...messages.home} />
                  </span>
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={() => props.push('/account')}
                >
                  <Icon>person</Icon>
                  <span className={classes.item}>
                    <FormattedMessage {...messages.account} />
                  </span>
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={() => props.push('/settings')}
                >
                  <Icon>settings</Icon>
                  <span className={classes.item}>
                    <FormattedMessage {...messages.settings} />
                  </span>
                </MenuItem>
                <MenuItem onClick={handleSignOut} className={classes.menuItem}>
                  <Icon> power_settings_new </Icon>
                  <span className={classes.item}>
                    <FormattedMessage {...messages.logout} />
                  </span>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    logOut: push => dispatch(logOut(push)),
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
)(TopBar);
