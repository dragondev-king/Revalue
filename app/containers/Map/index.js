import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Paper from '@material-ui/core/Paper';
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
import { setPropertyLocation } from '../Pages/FixAndFlip/actions';

export function Map(props) {
  useInjectReducer({ key: 'map', reducer });

  useEffect(() => {
    if (props.propertyLocation) {
      props.getLocationBoundariesByLocation(props.propertyLocation);
    }
  }, [props.propertyLocation]);

  return (
    <Paper
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <MapComponent
        center={props.center}
        propertyLocation={props.propertyLocation}
        boundaries={props.boundaries}
        disabled={props.disabled}
        setPropertyLocation={props.setPropertyLocation}
        isGettingBoundaries={props.isGettingBoundaries}
        errorGettingBoundaries={props.errorGettingBoundaries}
        isVendorScriptsLoaded={props.isVendorScriptsLoaded}
      />
    </Paper>
  );
}

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
  center: makeSelectCenter(),
  boundaries: makeSelectBoundaries(),
  errorGettingBoundaries: makeSelectErrorGettingBoundaries(),
  isGettingBoundaries: makeSelectIsGettingBoundaries(),
  isVendorScriptsLoaded: makeSelectIsVendorScriptsLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLocationBoundariesByLocation: location =>
      dispatch(getLocationBoundariesByLocation(location)),
    setPropertyLocation: location => dispatch(setPropertyLocation(location)),
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
