import React, { Fragment, memo } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { navigations } from '../navigations';
import VerticalNav from './VerticalNav';

export function SideNav(props) {
  const renderOverlay = () => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={() => props.setMode('close')} className="sidenav__overlay" />
  );

  return (
    <Fragment>
      <Scrollbar
        options={{ suppressScrollX: true }}
        className="scrollable position-relative"
      >
        <VerticalNav intl={props.intl} navigation={navigations} />
      </Scrollbar>
      {renderOverlay()}
    </Fragment>
  );
}

export default memo(SideNav);
