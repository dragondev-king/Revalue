import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useInjectReducer } from 'utils/injectReducer';
import { FormControl } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import messages from './messages';
import { makeSelectAnalysis, makeSelectSkelton } from './selectors';
import reducer from './reducer';
import { getAnalysisDataById } from './actions';
import 'react-loading-skeleton/dist/skeleton.css';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  ctrlWidth: {
    minWidth: '110px',
    marginRight: theme.spacing(6),
  },
  ctrlEndWidth: {
    minWidth: '110px',
  },
  doubleWidth: {
    minWidth: '270px',
    marginRight: theme.spacing(6),
  },
  inputWidth: {
    maxWidth: '110px',
    marginRight: theme.spacing(6),
  },
  inputLgWidth: {
    minWidth: '270px',
    marginRight: theme.spacing(6),
  },
  inputEndWidth: {
    maxWidth: '110px',
  },
  inputEndLgWidth: {
    minWidth: '270px',
  },
  rowSpacing: {
    marginTop: '32px',
  },
  title: {
    fontWeight: 'Bold',
    marginTop: '24px',
    marginBottom: '18px',
  },
  customizeBtn: {
    color: 'white',
    marginTop: '48px',
    marginBottom: '48px',
  },
  tableHead: {
    color: 'white',
    fontSize: '14px',
  },
  tableBody: {
    fontSize: '14px',
    '&:nth-of-type(odd)': {
      backgroundColor: '#CDD4EA',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  fixHeight: {
    minHeight: '300px',
    maxHeight: '300px',
  },
  iconMr: {
    marginLeft: '5px',
    marginBottom: '1px',
    padding: '0px',
  },
  iconSize: {
    width: '16px',
  },
  labelWidth: {
    minWidth: '170px',
  },
  accordion: {
    width: '100%',
    marginTop: '32px',
  },
}));

export function Analysis(props) {
  // debugger
  const classes = useStyles();
  useInjectReducer({ key: 'analysis', reducer });
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split('/').pop();
    props.getAnalysisDataById(id);
  }, []);

  function displayProperty() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.property,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.location} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.locationInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.location}
                name="location"
                readOnly
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.GCA} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.gcaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.gca}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">m²</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.GPA} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.gpaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.gpa}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">m²</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.bedrooms} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.bedroomsInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.bedrooms}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">#</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function displayInvestmentKpi() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.investmentKpi,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.askingPrice} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.askingPriceInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.askingPrice}
                name="askingPrice"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.proposedEntryPrice} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.proposedEntryPriceInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.propsedEntryPrice}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.estimatedExitPrice} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.estimatedExitPriceInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.estimatedExitPrice}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.timeForSale} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.timeForSaleInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.timeForSale}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">MM</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function displayCapital() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.capital,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.requiredEntryCapital} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.requiredEntryCapitalInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.requiredEntryCapital}
                name="requiredEntryCapital"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.requiredCapitalInvestment} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.requiredCapitalInvestmentInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.requiredCapitalOverInvestPeriod}
                name="propsedEntryPrice"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.totalRequierd} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.totalRequierdInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.totalRequiredCapital}
                name="totalRequiredCapital"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  
  function displayReturns() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12} p={0} m={0}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.returns,
            })}
          </Typography>
        </Grid>

        <Grid item container spacing={6} className="mb-10">
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.moic} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.moicInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.moic}
                  name="moic"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">x</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.profit} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.profitInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.profit}
                  name="profit"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">&#8364;</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.irr} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.irrInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.irr}
                  name="irr"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Analysis</title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      {!props.isGettingAnalysisById ? (
        [
          displayProperty(),
          displayInvestmentKpi(),
          displayCapital(),
          displayReturns(),
        ]
      ) : (
        <Skeleton count={4} height={100} />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
  isGettingAnalysisById: makeSelectSkelton(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAnalysisDataById: id => dispatch(getAnalysisDataById(id)),
    // setShowSkelton: defaultValue => dispatch(setShowSkelton(defaultValue)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  injectIntl,
)(Analysis);
