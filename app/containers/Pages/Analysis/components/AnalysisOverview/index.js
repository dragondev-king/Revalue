import React from 'react';
import Grid from '@material-ui/core/Grid';
import Money from 'images/money.png';
import MoneyUp from 'images/moneyUp.png';
import MoneyCircular from 'images/moneyCircular.png';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { InfoIcon } from 'components/SvgIconComponents';
import { Typography } from '@material-ui/core';
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
            style={{ margin: '15px 0px 0px 0px' }}
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
                      title={
                        <Typography variant="body1" className="text-white">
                          {props.intl.formatMessage({
                            ...messages.acquisitionPriceInfo,
                          })}
                        </Typography>
                      }
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
                <img src={Money} width={40} alt="Money" />
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
                      title={
                        <Typography variant="body1" className="text-white">
                          {props.intl.formatMessage({
                            ...messages.requiredInitialCapitalInfo,
                          })}
                        </Typography>
                      }
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
                <img src={Money} width={40} alt="Money" />
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
                      title={
                        <Typography variant="body1" className="text-white">
                          {props.intl.formatMessage({
                            ...messages.profitAfterTaxInfo,
                          })}
                        </Typography>
                      }
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
                <img src={Money} width={40} alt="Money" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            style={{ margin: '15px 0px 20px 0px' }}
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
                      title={
                        <Typography variant="body1" className="text-white">
                          {props.intl.formatMessage({
                            ...messages.internalRateOfReturnInfo,
                          })}
                        </Typography>
                      }
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
                <img src={MoneyCircular} width={40} alt="MoneyCircular" />
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
                      title={
                        <Typography variant="body1" className="text-white">
                          {props.intl.formatMessage({
                            ...messages.multipleOnInvestedCapitalInfo,
                          })}
                        </Typography>
                      }
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
                <img src={MoneyUp} width={40} alt="MoneyUp" />
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
                      ...messages.capitalGains,
                    })}
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={
                        <Typography variant="body1" className="text-white">
                          {props.intl.formatMessage({
                            ...messages.capitalGainsInfo,
                          })}
                        </Typography>
                      }
                    >
                      <IconButton className={classes.iconButton}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid item className={classes.overviewStatsPrice}>
                  € {formatNumber(props.analysis.capitalGains)}
                </Grid>
              </Grid>
              <Grid item>
                <img src={Money} width={40} alt="Money" />
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
