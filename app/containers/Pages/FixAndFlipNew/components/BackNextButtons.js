import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export const BackNextButtons = ({
  onBackClick,
  onNextClick,
  onSubmit,
  isGettingAnalysis,
  classes,
  analyzeButtonDisabled,
}) => (
  <>
    {onBackClick ? <Button onClick={onBackClick}>Back</Button> : null}
    {onNextClick ? (
      <Button color="primary" variant="contained" onClick={onNextClick}>
        NEXT
      </Button>
    ) : null}
    {onSubmit ? (
      <Button
        disabled={analyzeButtonDisabled}
        type="submit"
        color="primary"
        variant="contained"
        onClick={onSubmit}
      >
        {isGettingAnalysis && (
          <CircularProgress size={20} className={classes.loading} />
        )}
        {!isGettingAnalysis && 'Analyze'}
      </Button>
    ) : null}
  </>
);
