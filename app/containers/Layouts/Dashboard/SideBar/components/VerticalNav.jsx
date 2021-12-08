/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import TouchRipple from '@material-ui/core/ButtonBase';
import VerticalNavExpansionPanel from './VerticalNavExpansionPanel';
import messages from '../../messages';

class VerticalNav extends Component {
  state = {
    collapsed: true,
  };

  renderLevels = data =>
    data.map((item, index) => {
      if (item.children) {
        return (
          <VerticalNavExpansionPanel
            intl={this.props.intl}
            item={item}
            key={index}
          >
            {this.renderLevels(item.children)}
          </VerticalNavExpansionPanel>
        );
      }
      return (
        <NavLink key={index} to={item.path} className="nav-item">
          <TouchRipple key={item.label} name="child" className="w-100">
            {(() => {
              if (item.icon) {
                return (
                  <Icon className="item-icon text-middle">{item.icon}</Icon>
                );
              }
              return (
                <span className="item-icon icon-text">{item.iconText}</span>
              );
            })()}
            <span className="text-middle pl-20 item-text">
              {this.props.intl.formatMessage({ ...messages[item.label] })}
            </span>
            <div className="mx-auto" />
            {item.badge && (
              <div className={`badge bg-${item.badge.color}`}>
                {item.badge.value}
              </div>
            )}
          </TouchRipple>
        </NavLink>
      );
    });

  handleClick = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <div className="navigation">
        {this.renderLevels(this.props.navigation)}
      </div>
    );
  }
}

export default VerticalNav;
