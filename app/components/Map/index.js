import React from 'react';
import { Skeleton } from '@material-ui/lab';
import MapComponent from './MapComponent';

const Map = ({
  isVendorScriptsLoaded,
  isGettingBoundaries,
  center,
  propertyLocation,
  errorGettingBoundaries,
  disabled,
  boundaries,
  setPropertyLocation,
}) => (
  <>
    {!isVendorScriptsLoaded && (
      <Skeleton
        variant="rect"
        animation="wave"
        style={{
          height: '100%',
        }}
      />
    )}
    {isVendorScriptsLoaded && (
      <>
        {errorGettingBoundaries ? (
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              height: '100%',
            }}
          />
        ) : (
          <>
            {isGettingBoundaries && (
              <Skeleton
                variant="rect"
                animation="wave"
                style={{
                  height: '100%',
                }}
              />
            )}
            {!isGettingBoundaries && (
              <MapComponent
                center={center}
                disabled={disabled}
                propertyLocation={propertyLocation}
                boundaries={boundaries}
                setPropertyLocation={setPropertyLocation}
                isLoaded={!isGettingBoundaries}
              />
            )}
          </>
        )}
      </>
    )}
  </>
);

export default Map;
