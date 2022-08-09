import React from 'react';
import Grid from '@material-ui/core/Grid';
import PriceStat from 'images/price.png';
import Investment from 'images/investment.png';
import Tax from 'images/tax.png';
import IRR from 'images/irr.png';
import messages from '../../messages';

import 'react-loading-skeleton/dist/skeleton.css';
import { useStyles } from '../../styles';

const DisplayOverviewStats = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.overviewStatsGrid}>
      <Grid
        item
        container
        xs={3}
        justifyContent="space-between"
        alignItems="center"
        className={classes.overviewStatsCard}
      >
        <Grid item>
          <Grid item className={classes.overviewStatsTitle}>
            {props.intl.formatMessage({
              ...messages.entryPrice,
            })}
          </Grid>
          <Grid item className={classes.overviewStatsPrice}>
            €{' '}
            {props &&
              props.analysis &&
              props.analysis.entryCapital &&
              props.analysis.entryCapital}
          </Grid>
        </Grid>
        <Grid item>
          <img src={PriceStat} width={50} alt="price" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={3}
        justifyContent="space-between"
        alignItems="center"
        className={classes.overviewStatsCard}
      >
        <Grid item>
          <Grid item className={classes.overviewStatsTitle}>
            {props.intl.formatMessage({
              ...messages.requiredInitialInvestment,
            })}
          </Grid>
          <Grid item className={classes.overviewStatsPrice}>
            € 13,000
          </Grid>
        </Grid>
        <Grid item>
          <img src={Investment} width={50} alt="price" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={3}
        justifyContent="space-between"
        alignItems="center"
        className={classes.overviewStatsCard}
      >
        <Grid item>
          <Grid item className={classes.overviewStatsTitle}>
            {props.intl.formatMessage({
              ...messages.profit,
            })}
          </Grid>
          <Grid item className={classes.overviewStatsPrice}>
            €{' '}
            {props &&
              props.analysis &&
              props.analysis.profitAfterTax &&
              props.analysis.profitAfterTax.toFixed(2)}
          </Grid>
        </Grid>
        <Grid item>
          <img src={Tax} width={50} alt="price" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={3}
        justifyContent="space-between"
        alignItems="center"
        className={classes.overviewStatsCard}
      >
        <Grid item>
          <Grid item className={classes.overviewStatsTitle}>
            {props.intl.formatMessage({
              ...messages.irr,
            })}
          </Grid>
          <Grid item className={classes.overviewStatsPrice}>
            15%
          </Grid>
        </Grid>
        <Grid item>
          <img src={IRR} width={50} alt="price" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DisplayOverviewStats;
