import React from 'react';
import Grid from '@material-ui/core/Grid';
import EntryPrice from 'images/entryPrice.png';
import RequiredInitialInvestment from 'images/requiredInitialInvestment.png';
import ProfitAfterTax from 'images/profitAfterTax.png';
import InternalRateOfReturn from 'images/internalRateOfReturn.png';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { InfoIcon } from 'components/SvgIconComponents';
import { useStyles } from '../../styles';
import messages from '../../../Investments/messages';

const AnalysisOverview = ({ props }) => {
  const classes = useStyles();
  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid container direction="column">
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.overviewStatsGrid}
          >
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.overviewStatsCard}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.overviewStatsTitle}
                >
                  <Grid item>
                    {props.intl.formatMessage({
                      ...messages.entryPrice,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.entryPriceInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.entryPrice)}
                </Grid>
              </Grid>
              <Grid item>
                <img src={EntryPrice} width={40} alt="entryPrice" />
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.overviewStatsCard}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.overviewStatsTitle}
                >
                  <Grid item>
                    {props.intl.formatMessage({
                      ...messages.requiredInitialInvestment,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.requiredInitialInvestmentInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.entryCapital)}
                </Grid>
              </Grid>
              <Grid item>
                <img
                  src={RequiredInitialInvestment}
                  width={40}
                  alt="requiredInitialInvestment"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.overviewStatsCard}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.overviewStatsTitle}
                >
                  <Grid item>
                    {props.intl.formatMessage({
                      ...messages.profitAfterTax,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.profitAfterTaxInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.profitAfterTax)}
                </Grid>
              </Grid>
              <Grid item>
                <img src={ProfitAfterTax} width={40} alt="profitAfterTax" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.overviewStatsGrid}
          >
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.overviewStatsCard}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.overviewStatsTitle}
                >
                  <Grid item>
                    {props.intl.formatMessage({
                      ...messages.internalRateOfReturn,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.internalRateOfReturnInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  % {formatNumber(props.analysis.internalRateOfReturn)}
                </Grid>
              </Grid>
              <Grid item>
                <img
                  src={InternalRateOfReturn}
                  width={40}
                  alt="internalRateOfReturn"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.overviewStatsCard}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.overviewStatsTitle}
                >
                  <Grid item>
                    {props.intl.formatMessage({
                      ...messages.multipleOnInvestedCapital,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.multipleOnInvestedCapitalInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  x {props.analysis.multipleOnInvestedCapital}
                </Grid>
              </Grid>
              <Grid item>
                <img
                  src={RequiredInitialInvestment}
                  width={40}
                  alt="requiredInitialInvestment"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.overviewStatsCard}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.overviewStatsTitle}
                >
                  <Grid item>
                    {props.intl.formatMessage({
                      ...messages.capitalValueGrowth,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.capitalValueGrowthInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.capitalValueGrowth)}
                </Grid>
              </Grid>
              <Grid item>
                <img src={ProfitAfterTax} width={40} alt="profitAfterTax" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Skeleton count={6} height={100} />
      )}
    </>
  );
};

export default AnalysisOverview;
