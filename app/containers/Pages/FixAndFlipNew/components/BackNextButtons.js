import React from 'react';
import Button from '@material-ui/core/Button';

export const BackNextButtons = ({ onBackClick, onNextClick }) => (
  <>
    {onBackClick ? <Button onClick={onBackClick}>Back</Button> : null}
    {onNextClick ? (
      <Button color="primary" variant="contained" onClick={onNextClick}>
        NEXT
      </Button>
    ) : null}
  </>
);
