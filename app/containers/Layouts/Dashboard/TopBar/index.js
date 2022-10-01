/* eslint-disable react/no-array-index-key,no-unused-vars */
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MenuItem, Grid, FormControl, Select } from '@material-ui/core';
import { logOut } from 'containers/Authentication/actions';
import { isMdScreen } from 'utils/isMdScreen';
import { classList } from 'utils/classList';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUser,
  makeSelectAuthenticated,
} from 'containers/Authentication/selectors';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from '../reducer';

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
  langSelectControl: {
    marginTop: '14px',
  },
  langSelect: {
    textTransform: 'uppercase',
    fontSize: '13px',
    fontWeight: '700',
    color: '#31342B',
    '& svg': {
      display: 'none',
    },
  },
}));

export function TopBar(props) {
  const classes = useStyles();

  useInjectReducer({ key: 'dashboard', reducer });

  const handleSignOut = () => {
    props.logOut(props.push);
  };

  const language = [{ name: 'en' }, { name: 'pt' }];

  const handleChange = event => {
    props.changeLocale(event.target.value);
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
        <Grid
          item
          container
          className="mt-5"
          spacing={4}
          justifyContent="flex-end"
        >
          <Grid item container justifyContent="flex-end" xs={3}>
            <Grid item>
              <FormControl className={classes.langSelectControl}>
                <Select
                  name="type"
                  defaultValue={props.language}
                  onChange={handleChange}
                  disableUnderline
                  className={classes.langSelect}
                >
                  {language.map(value => (
                    <MenuItem key={value} value={value.name}>
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        {/*   <Grid container alignContent="space-between" alignItems="center">
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
        </Grid> */}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authenticated: makeSelectAuthenticated(),
  language: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    logOut: push => dispatch(logOut(push)),
    changeLocale: input => dispatch(changeLocale(input)),
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
