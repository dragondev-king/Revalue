import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  // FormattedMessage,
  injectIntl,
} from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import { useInjectReducer } from 'utils/injectReducer';
// import { FormControl } from '@material-ui/core';
// import Skeleton from 'react-loading-skeleton';
import SettingIcon from 'images/settingIcon.png';
import BreakdownTable from './components/BreakdownTable';
// import Criteria from 'containers/Pages/Analysis/components/Criteria';
import EstimatedProfitTable from './components/EstimatedProfitTable';
// import ValuationModal from 'containers/Pages/Analysis/components/ValuationModel';
// import PriceStat from 'images/price.png';
// import Investment from 'images/investment.png';
import messages from './messages';
import SettingDrawer from './components/Drawer';
import {
  makeSelectAnalysis,
  makeSelectIsGettingAnalysisById,
} from './selectors';
import reducer from './reducer';
import {
  getAnalysisDataById,
  getPropertyLocations,
  getPropertyTypes,
  getPropertyTypologies,
  getPropertyConditions,
  getAcquisitionTypes,
  getCIPs,
} from './actions';
import 'react-loading-skeleton/dist/skeleton.css';
import DisplayOverviewStats from './components/DisplayOverviewStats';
import PropertyInformationAndCarousel from './components/PropertyInformationAndCarousel';
import PropertyInformationAndMap from './components/PropertyInformationAndMap';
import SensitivityTable from './components/SensitivityTable';
import SalesActivityHistory from './components/SalesActivityHistory';
import ForcastGraph from './components/ForcastGraph';
import AcuisitionDepTable from './components/AcuisitionDepTable';
import { useStyles } from './styles';

export function Analysis(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  useInjectReducer({ key: 'analysis', reducer });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    const path = window.location.pathname;
    const id = path.split('/').pop();
    props.getAnalysisDataById(id);
  }, []);

  useEffect(() => {
    props.getPropertyLocations();
    props.getPropertyTypes();
    props.getPropertyTypologies();
    props.getPropertyConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  /*
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.grossArea} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.grossAreaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.property.grossArea}
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.usefulArea} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.usefulAreaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.usefulArea}
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.totalRequired} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.totalRequiredInfo,
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
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.returns,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.requiredInitialInvestment} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.requiredInitialInvestmentInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.requiredInitialInvestment}
                name="requiredInitialInvestment"
                readOnly
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
    );
  }
*/

  return (
    <div className={classes.analysisWrapper}>
      <Helmet>
        <title>Analysis</title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      <Grid item container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.pageTitle}>
            {props.intl.formatMessage({
              ...messages.report,
            })}
          </Typography>
          <Typography variant="h6" className={classes.pageBiggerTitle}>
            {props.intl.formatMessage({
              ...messages.analyticsOverview,
            })}
          </Typography>
        </Grid>
      </Grid>
      <DisplayOverviewStats props={props} />
      <PropertyInformationAndCarousel props={props} />
      <PropertyInformationAndMap props={props} />
      <SensitivityTable props={props} />
      <EstimatedProfitTable props={props} />
      <SalesActivityHistory props={props} />
      <ForcastGraph props={props} />
      <BreakdownTable props={props} />
      <AcuisitionDepTable props={props} />
      {open && <SettingDrawer open={open} setOpen={setOpen} />}

      {/* {!props.isGettingAnalysisById ? (
        [
          displayProperty(),
          displayInvestmentKpi(),
          displayCapital(),
          displayReturns(),
        ]
      ) : (
        <Skeleton count={6} height={100} />
      )}
      <EstimatedProfitTable props={props} />
      <BreakdownTable props={props} />
      <ValuationModal props={props} />
      <Criteria props={props} /> */}
      <div className={classes.settingIconContainer}>
        <button
          type="button"
          className={classes.settingIconWrapper}
          onClick={() => setOpen(true)}
        >
          <img src={SettingIcon} width={44} height={44} alt="setting" />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
  isGettingAnalysisById: makeSelectIsGettingAnalysisById(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAnalysisDataById: id => dispatch(getAnalysisDataById(id)),
    getPropertyLocations: () => dispatch(getPropertyLocations()),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getCIPs: () => dispatch(getCIPs()),
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
