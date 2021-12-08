import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Tooltip } from '@material-ui/core';
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
}));

function PaperChartLineSimple(props) {
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

export default PaperChartLineSimple;
