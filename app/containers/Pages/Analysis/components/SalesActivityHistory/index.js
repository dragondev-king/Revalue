import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Skeleton } from '@material-ui/lab';
import messages from 'containers/Pages/Analysis/messages';
import { useStyles } from 'containers/Pages/Analysis/styles';

const SalesActivityHistory = ({ props }) => {
  const classes = useStyles();
  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid className={classes.salesActivityHistoryContainer}>
          <Typography className={classes.sectionTitle}>
            {props.intl.formatMessage({
              ...messages.salesActivityHistory,
            })}
          </Typography>
          <Paper className="mt-20">
            <Grid container direction="row">
              <Grid item xs={6} className="p-20" style={{ height: '400px' }}>
                <Paper
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={6} className="p-20" style={{ height: '400px' }}>
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
        <Skeleton count={6} animation="wave" height={100} />
      )}
    </>
  );
};

export default SalesActivityHistory;
