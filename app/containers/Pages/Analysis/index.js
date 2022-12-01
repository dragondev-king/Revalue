import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useInjectReducer } from 'utils/injectReducer';
import SettingIcon from 'images/settingIcon.png';
import BreakdownTable from './components/BreakdownTable';
import EstimatedProfitTable from './components/EstimatedProfitTable';
import messages from './messages';
import SettingDrawer from './components/Drawer';
import {
  makeSelectIsGettingAnalysisById,
  makeSelectAnalysisData,
} from './selectors';
import reducer from './reducer';
import {
  getAnalysisById,
  getPropertyTypologies,
  getPropertyTypes,
  getPropertyConditions,
  getAcquisitionTypes,
  getCIPs,
  getIrsCategories,
  getIrsCategoryRegions,
  getIrsDependentsList,
} from './actions';
import AnalysisOverview from './components/AnalysisOverview';
import PropertyInformation from './components/PropertyInformation';
import AnalysisInformationAndMap from './components/AnalysisInformationAndMap';
import { useStyles } from './styles';
import ForecastGraph from './components/ForecastGraph';

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
    props.getAnalysisById(id);
    props.getIrsCategories();
    props.getIrsDependentsList();
    props.getIrsCategoryRegions();
    props.getPropertyTypes();
    props.getPropertyTypologies();
    props.getPropertyConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          {props.intl.formatMessage({
            ...messages.analysisTitle,
          })}
        </title>
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
              ...messages.analysisOverview,
            })}
          </Typography>
        </Grid>
      </Grid>
      <AnalysisOverview props={props} />
      <PropertyInformation props={props} />
      <AnalysisInformationAndMap props={props} />
      <EstimatedProfitTable props={props} />
      {/*  <SalesActivityHistory props={props} />
       */}
      <ForecastGraph props={props} />
      <BreakdownTable props={props} />
      {open && <SettingDrawer open={open} setOpen={setOpen} />}
      <div className={classes.settingIconContainer}>
        <button
          type="button"
          className={classes.settingIconWrapper}
          onClick={() => setOpen(true)}
        >
          <img src={SettingIcon} width={60} height={60} alt="setting" />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysisData(),
  isGettingAnalysisById: makeSelectIsGettingAnalysisById(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAnalysisById: id => dispatch(getAnalysisById(id)),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getCIPs: () => dispatch(getCIPs()),
    getIrsCategories: () => dispatch(getIrsCategories()),
    getIrsCategoryRegions: () => dispatch(getIrsCategoryRegions()),
    getIrsDependentsList: () => dispatch(getIrsDependentsList()),
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
