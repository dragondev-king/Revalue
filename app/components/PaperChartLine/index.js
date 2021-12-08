import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Chip, Tooltip } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import ChartLine from '../ChartLine';

const useStyles = makeStyles(() => ({
  height: {
    height: '100%',
  },
  title: {
    margin: '15px 7px 15px 15px',
  },
  chart: {
    margin: '0px 15px 15px 15px',
  },
  icon: {
    marginTop: '19px',
  },
  gridChartLine: {
    textAlign: '-webkit-right',
  },
  successChip: {
    backgroundColor: '#e9f6f1',
    marginTop: '7px',
    fontWeight: '500',
  },
  errorChip: {
    backgroundColor: '#fef4f6',
    marginTop: '7px',
    fontWeight: '500',
  },
  red: {
    color: 'red !important',
  },
  green: {
    color: 'green !important',
  },
}));

function returnDifference(difference, classes) {
  if (difference) {
    if (difference > 0) {
      return (
        <Chip
          className={classes.successChip}
          size="small"
          label={`${difference}%`}
          avatar={<CallMadeIcon className={classes.green} />}
        />
      );
    }
    return (
      <Chip
        className={classes.errorChip}
        label={`${difference}%`}
        avatar={<CallReceivedIcon className={classes.red} />}
      />
    );
  }
  return <></>;
}

function PaperChartLine(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.height}>
      <Grid container className={classes.height}>
        <Grid item container>
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              {props.title}
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip
              title={props.tooltip}
              placement="top"
              arrow
              style={{ cursor: 'pointer' }}
            >
              <InfoOutlinedIcon className={classes.icon} fontSize="small" />
            </Tooltip>
          </Grid>
        </Grid>
        {props.data && props.data !== [] ? (
          <Grid
            item
            container
            className={classes.chart}
            justify="space-between"
          >
            <Grid item xs={6}>
              <Typography variant="h6" style={{ display: 'inline-block' }}>
                {props.value}
              </Typography>
              <Typography
                variant="h5"
                style={{ display: 'inline-block', marginLeft: '5px' }}
              >
                {props.measure}
              </Typography>
              <Typography variant="button" style={{ display: 'block' }}>
                {props.month}
              </Typography>
              {returnDifference(props.difference, classes)}
            </Grid>
            <Grid item xs={6} className={classes.gridChartLine}>
              <ChartLine
                data={props.data}
                measure={props.measure}
                color={props.color}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid item container />
        )}
      </Grid>
    </Paper>
  );
}

export default PaperChartLine;
