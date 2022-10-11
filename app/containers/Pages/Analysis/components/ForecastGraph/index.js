import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Skeleton } from '@material-ui/lab';
import messages from 'containers/Pages/Analysis/messages';
import { useStyles } from 'containers/Pages/Analysis/styles';

const ForecastGraph = ({ props }) => {
  const classes = useStyles();
  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid className={classes.forecastGraphContainer}>
          <Typography className={classes.sectionTitle}>
            {props.intl.formatMessage({
              ...messages.forecast,
            })}
          </Typography>
          <Paper className="mt-20 p-20">
            <Grid container direction="row">
              <Grid item xs={12} style={{ height: '400px' }}>
                <Paper
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ) : (
        <Skeleton animation="wave" count={1} height={400} />
      )}
    </>
  );
};

export default ForecastGraph;
