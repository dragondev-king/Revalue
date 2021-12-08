import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Map from '../../containers/Map';

function PaperMap() {
  return (
    <Paper
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Map />
    </Paper>
  );
}

export default memo(PaperMap);
