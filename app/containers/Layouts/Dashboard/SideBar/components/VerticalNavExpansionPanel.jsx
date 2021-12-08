/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { withStyles, Icon } from '@material-ui/core';
import TouchRipple from '@material-ui/core/ButtonBase';
import { withRouter } from 'react-router-dom';
import { classList } from 'utils/classList';
import messages from '../../messages';

const styles = theme => ({
  expandIcon: {
    transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
    transform: 'rotate(90deg)',
    // marginRight: "16px"
  },
  collapseIcon: {
    transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
    transform: 'rotate(0deg)',
    // marginRight: "16px"
  },
  'expansion-panel': {
    overflow: 'hidden',
    transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)',
  },
  highlight: {
    background: theme.palette.primary.main,
  },
});

class VerticalNavExpansionPanel extends Component {
  state = {
    collapsed: true,
  };

  elementRef = React.createRef();

  componentHeight = 0;

  handleClick = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ collapsed: !this.state.collapsed });
  };

  calcaulateHeight(node) {
    if (node.name !== 'child') {
      // eslint-disable-next-line no-restricted-syntax
      for (const child of node.children) {
        this.calcaulateHeight(child);
      }
    }
    this.componentHeight += node.clientHeight;
  }

  componentDidMount() {
    const { location } = this.props;
    this.calcaulateHeight(this.elementRef);

    // OPEN DROPDOWN IF CHILD IS ACTIVE
    // eslint-disable-next-line no-restricted-syntax
    for (const child of this.elementRef.children) {
      if (child.getAttribute('href') === location.pathname) {
        this.setState({ collapsed: false });
      }
    }
  }

  render() {
    const { collapsed } = this.state;
    const { classes, children } = this.props;
    const { label, icon, badge } = this.props.item;
    return (
      <div>
        <TouchRipple
          className={classList({
            'nav-item flex-middle h-48 w-100 has-submenu': true,
            open: !collapsed,
          })}
          onClick={this.handleClick}
        >
          <div>
            <Icon className="text-middle item-icon">{icon}</Icon>
            <span className="text-middle pl-20 item-text">
              {this.props.intl.formatMessage({ ...messages[label] })}
            </span>
          </div>
          {badge && (
            <div className={`badge bg-${badge.color}`}>{badge.value}</div>
          )}
          <div
            className={
              collapsed
                ? `${classes.collapseIcon} item-arrow`
                : `${classes.expandIcon} item-arrow`
            }
          >
            <Icon className="text-middle">chevron_right</Icon>
          </div>
        </TouchRipple>
        <div
          ref={el => (this.elementRef = el)}
          className={`${classes['expansion-panel']} submenu`}
          style={
            collapsed
              ? { maxHeight: '0px' }
              : { maxHeight: `${this.componentHeight}px` }
          }
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(VerticalNavExpansionPanel));
