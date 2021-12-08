import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { push } from 'connected-react-router';
import { makeSelectPathname } from 'containers/App/selectors';
import { makeSelectAuthenticated } from 'containers/Authentication/selectors';
import { getUserDetails } from 'containers/Authentication/actions';
import Scrollbar from 'react-perfect-scrollbar';
import { classList } from 'utils/classList';
import { isMdScreen } from 'utils/isMdScreen';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Footer from './Footer';
import messages from './messages';
import { getVendorScriptsSuccess } from './actions';

class Dashboard extends Component {
  state = { mode: isMdScreen() ? 'close' : 'compact' };

  componentWillMount() {
    if (window) {
      window.addEventListener('resize', this.listenWindowResize);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isScriptLoaded && !this.props.isScriptLoaded) {
      if (nextProps.isScriptLoadSucceed) {
        this.props.getVendorScriptsSuccess();
      }
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.listenWindowResize);
    }
  }

  listenWindowResize = () => {
    const mode = isMdScreen() ? 'close' : 'compact';
    this.setMode(mode);
  };

  setMode = mode => {
    this.setState({ mode });
  };

  componentDidMount() {
    if (this.props.authenticated) {
      this.props.getUserDetails();
    }
  }

  render() {
    const layoutClasses = {
      [`dashboard sidenav-${this.state.mode} flex`]: true,
      'topbar-fixed': true,
    };

    return (
      <div className={classList(layoutClasses)}>
        <SideBar
          name={this.props.intl.formatMessage({ ...messages.brand })}
          intl={this.props.intl}
          mode={this.state.mode}
          setMode={this.setMode}
        />
        <div className="content-wrap position-relative">
          <TopBar
            className="elevation-z8"
            mode={this.state.mode}
            intl={this.props.intl}
            push={this.props.push}
            setMode={this.setMode}
          />
          <Scrollbar className="scrollable-content">
            <div className="content">
              <div className="m-sm-30">{this.props.children}</div>
            </div>
            <div className="my-auto" />
            <Footer />
          </Scrollbar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
  authenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: event => dispatch(push(event)),
    getUserDetails: () => dispatch(getUserDetails()),
    getVendorScriptsSuccess: () => dispatch(getVendorScriptsSuccess()),
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
)(Dashboard);

/*
TODO
export default compose(
  scriptLoader([
    'https://js.stripe.com/v3/',
    `https://maps.googleapis.com/maps/api/js?v=3.44&key=${
      process.env.GOOGLE_MAPS_API_KEY
    }`,
  ]),
  withConnect,
  memo,
  injectIntl,
)(Dashboard);
*/
