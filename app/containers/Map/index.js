import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import MapComponent from '../../components/Map';
import { makeSelectIsVendorScriptsLoaded } from '../Layouts/Dashboard/selectors';
import {
  makeSelectBoundaries,
  makeSelectCenter,
  makeSelectErrorGettingBoundaries,
  makeSelectIsGettingBoundaries,
} from './selectors';
import { getLocationBoundariesByLocation } from './actions';
import { makeSelectAuthenticated } from '../Authentication/selectors';
import reducer from './reducer';
import { useInjectReducer } from '../../utils/injectReducer';
import { makeSelectLocation } from '../Pages/Analysis/selectors';
import { setLocation } from '../Pages/Analysis/actions';

export function Map(props) {
  useInjectReducer({ key: 'map', reducer });

  useEffect(() => {
    if (props.authenticated && props.location) {
      props.getLocationBoundariesByLocation(props.location);
    }
  }, [props.location]);

  return (
    <MapComponent
      center={props.center}
      location={props.location}
      boundaries={props.boundaries}
      setLocation={props.setLocation}
      isGettingBoundaries={props.isGettingBoundaries}
      errorGettingBoundaries={props.errorGettingBoundaries}
      isVendorScriptsLoaded={props.isVendorScriptsLoaded}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
  center: makeSelectCenter(),
  boundaries: makeSelectBoundaries(),
  location: makeSelectLocation(),
  errorGettingBoundaries: makeSelectErrorGettingBoundaries(),
  isGettingBoundaries: makeSelectIsGettingBoundaries(),
  isVendorScriptsLoaded: makeSelectIsVendorScriptsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLocationBoundariesByLocation: location =>
      dispatch(getLocationBoundariesByLocation(location)),
    setLocation: location => dispatch(setLocation(location)),
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
)(Map);
