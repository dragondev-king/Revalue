import React from 'react';
import Button from '@material-ui/core/Button';

export const BackNextButtons = ({ onBackClick, onNextClick, onSubmit }) => (
  <>
    {onBackClick ? <Button onClick={onBackClick}>Back</Button> : null}
    {onNextClick ? (
      <Button color="primary" variant="contained" onClick={onNextClick}>
        NEXT
      </Button>
    ) : null}
    {onSubmit ? (
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={onSubmit}
      >
        Analyze
      </Button>
    ) : null}
  </>
);
