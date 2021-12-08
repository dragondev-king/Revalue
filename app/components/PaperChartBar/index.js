import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ChartBar from '../ChartBar';

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
  gridChartBar: {
    textAlign: '-webkit-center',
    margin: '10px 20px 10px 10px',
  },
}));

function PaperChartBar(props) {
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
          <Grid item xs className={classes.gridChartBar}>
            <ChartBar data={props.data} title={props.title} />
          </Grid>
        ) : (
          <Grid />
        )}
      </Grid>
    </Paper>
  );
}

export default memo(PaperChartBar);
