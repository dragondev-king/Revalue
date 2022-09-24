import React from 'react';
import Grid from '@material-ui/core/Grid';
import EntryPrice from 'images/entryPrice.png';
import RequiredInitialCapital from 'images/requiredInitialCapital.png';
import ProfitAfterTax from 'images/profitAfterTax.png';
import InternalRateOfReturn from 'images/internalRateOfReturn.png';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { InfoIcon } from 'components/SvgIconComponents';
import { useStyles } from '../../styles';
import messages from '../../messages';

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
            style={{ margin: '30px 0px 0px 0px' }}
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
                      ...messages.acquisitionPrice,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.acquisitionPriceInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.acquisitionPrice)}
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
                      ...messages.requiredInitialCapital,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.requiredInitialCapitalInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.requiredInitialCapital)}
                </Grid>
              </Grid>
              <Grid item>
                <img
                  src={RequiredInitialCapital}
                  width={40}
                  alt="requiredInitialCapital"
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
            style={{ margin: '15px 0px 30px 0px' }}
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
                  src={RequiredInitialCapital}
                  width={40}
                  alt="requiredInitialCapital"
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
                      ...messages.capitalGain,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={props.intl.formatMessage({
                        ...messages.capitalGainInfo,
                      })}
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.capitalGain)}
                </Grid>
              </Grid>
              <Grid item>
                <img src={ProfitAfterTax} width={40} alt="profitAfterTax" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Skeleton animation="wave" count={6} height={100} />
      )}
    </>
  );
};

export default AnalysisOverview;
