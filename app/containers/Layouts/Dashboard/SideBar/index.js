import React, { Component, Fragment, memo } from 'react';
import Brand from 'components/Brand';
import { withRouter } from 'react-router-dom';
import { isMdScreen } from 'utils/isMdScreen';
import { withStyles } from '@material-ui/core';
import Sidenav from './components/SideNav';

class SideBar extends Component {
  componentWillMount() {
    // eslint-disable-next-line no-unused-vars
    this.unlistenRouteChange = this.props.history.listen((location, action) => {
      if (isMdScreen()) {
        this.props.setMode('close');
      }
    });
  }

  componentWillUnmount() {
    this.unlistenRouteChange();
  }

  render() {
    return (
      <div className="sidenav">
        <div className="sidenav__hold">
          {
            <Fragment>
              <Brand name={this.props.name} />
              <Sidenav
                intl={this.props.intl}
                mode={this.props.mode}
                setMode={this.props.setMode}
              />
            </Fragment>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(null, { withTheme: true })(memo(withRouter(SideBar)));
