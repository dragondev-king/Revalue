import React from 'react';
import Button from '@material-ui/core/Button';

export const BackNextButtons = ({ onBackClick, onNextClick }) => (
  <>
    <Button onClick={onBackClick}>Back</Button>
    <Button color="primary" variant="contained" onClick={onNextClick}>
      NEXT
    </Button>
  </>
);
