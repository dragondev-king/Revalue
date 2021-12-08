import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Tooltip } from '@material-ui/core';
import ChartLineComplex from '../ChartLineComplex';

const useStyles = makeStyles(() => ({
  height: {
    height: '100%',
    minHeight: '400px',
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
  gridChartLineComplex: {
    textAlign: '-webkit-center',
    margin: '10px 20px 10px 10px',
  },
}));

function PaperChartLineComplex(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.height}>
      <Grid container className={classes.height}>
        <Grid container>
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
          <Grid item xs className={classes.gridChartLineComplex}>
            <ChartLineComplex data={props.data} title={props.title} />
          </Grid>
        ) : (
          <Grid />
        )}
      </Grid>
    </Paper>
  );
}

export default PaperChartLineComplex;
