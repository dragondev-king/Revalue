import React from 'react';
import { Skeleton } from '@material-ui/lab';
import MapComponent from './MapComponent';

const Map = ({
  isVendorScriptsLoaded,
  isGettingBoundaries,
  center,
  propertyLocation,
  errorGettingBoundaries,
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
