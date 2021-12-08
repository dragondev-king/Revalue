import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ChartPie from '../ChartPie';

const useStyles = makeStyles(() => ({
  title: {
    margin: '15px',
  },
  chart: {
    margin: '0px 15px 15px 15px',
  },
  icon: {
    margin: '15px 15px 0px 0px',
  },
  gridChartPie: {
    textAlign: '-webkit-center',
    margin: '10px',
  },
}));

function PaperChartPie(props) {
  const classes = useStyles();

  return (
    <Paper>
      <Grid container>
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="body1" className={classes.title}>
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
        <Grid item xs className={classes.gridChartPie}>
          {props.data && props.data !== [] ? (
            <ChartPie data={props.data} color={props.color} />
          ) : (
            <div />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PaperChartPie;
