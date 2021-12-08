import React from 'react';
import { Skeleton } from '@material-ui/lab';
import MapComponent from './MapComponent';

const Map = ({
  isVendorScriptsLoaded,
  isGettingBoundaries,
  center,
  location,
  errorGettingBoundaries,
  boundaries,
  setLocation,
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
                location={location}
                boundaries={boundaries}
                setLocation={setLocation}
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
