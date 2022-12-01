import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Skeleton } from '@material-ui/lab';
import ComingSoon from 'images/soon.jpg';
import Map from 'containers/Map';

const tutorialSteps = [
  {
    map: true,
  },
  {
    imgPath: ComingSoon,
  },
  {
    imgPath: ComingSoon,
  },
  {
    imgPath: ComingSoon,
  },
  {
    imgPath: ComingSoon,
  },
  {
    imgPath: ComingSoon,
  },
  {
    imgPath: ComingSoon,
  },
  {
    imgPath: ComingSoon,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  img: {
    height: '350px',
    display: 'block',
    width: '100%',
    overflow: 'hidden',
  },
}));

function SwappableTextMobileStepper({ props }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid className={classes.root}>
          <SwipeableViews
            key="autoPlaySwappableViews"
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => {
              if (Math.abs(activeStep - index) <= 2) {
                if (step.map) {
                  return (
                    <Map propertyLocation={props.analysis.location} disabled />
                  );
                }
                return (
                  <img
                    key={step.label}
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                );
              }
              return null;
            })}
          </SwipeableViews>
          <MobileStepper
            key="mobileStepper"
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </Grid>
      ) : (
        <Skeleton animation="wave" count={6} height={100} />
      )}
    </>
  );
}

export default SwappableTextMobileStepper;
