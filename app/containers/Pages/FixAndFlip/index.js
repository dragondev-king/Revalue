/* eslint-disable react/no-array-index-key */
import React, { memo, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';

import { useInjectReducer } from 'utils/injectReducer';
import Property from './Property';
import Proposal from './Proposal';
import Financing from './Financing';
import Rehab from './Rehab';
import Rent from './Rent';
import OperatingCosts from './OperatingCosts';
import Tax from './Tax';
import Sale from './Sale';
import Capital from './Capital';
import { ItemInfo } from './components/ItemInfo';
import { Sorter } from './components/Sorter';

import messages from './messages';
import {
  makeSelectPropertyTypes,
  makeSelectIrsCategories,
  makeSelectPropertyTypologies,
  makeSelectPropertyConditions,
  makeSelectPropertyLocations,
  makeSelectCIPs,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectAnalysis,
  makeSelectIsGettingAnalysis,
  makeSelectAcquisitionTypes,
  makeSelectAnalyzeButtonDisabled,
  makeSelectIrsCategoryRegions,
  makeSelectIrsDependentsList,
  makeSelectActiveStep,
  makeSelectAdvanceOptionsStatus,
} from './selectors';
import reducer from './reducer';
import {
  getPropertyLocations,
  getPropertyTypes,
  getPropertyTypologies,
  getPropertyConditions,
  getAcquisitionTypes,
  getAnalysis,
  getCIPs,
  setAnalyzeButtonDisabled,
  setInputError,
  setInputValue,
  setPropertyLocation,
  getIrsCategories,
  getIrsCategoryRegions,
  getIrsDependentsList,
  setActiveStep,
  setAdvanceOptionsStatus,
} from './actions';
import useStyles from './styles';
import { mockResult } from './mockData';

const steps = [
  {
    label: 'locationLabel',
    detail: 'locationDetail',
  },
  {
    label: 'proposalLabel',
    detail: 'proposalDetail',
  },
  {
    label: 'financingLabel',
    detail: 'financingDetail',
  },
  {
    label: 'rehabLabel',
    detail: 'rehabDetail',
  },
  {
    label: 'rentLabel',
    detail: 'rentDetail',
  },
  {
    label: 'operatingCostsLabel',
    detail: 'operatingCostsDetail',
  },
  {
    label: 'taxLabel',
    detail: 'taxDetail',
  },
  {
    label: 'saleLabel',
    detail: 'saleDetail',
  },
  {
    label: 'capitalLabel',
    detail: 'capitalDetail',
  },
];

const filterValues = [
  'Highest profit after tax',
  'Filter Condition 1',
  'Filter Condition 2',
  'Filter Condition 3',
];

export function FixAndFlip(props) {
  useInjectReducer({ key: 'investment', reducer });
  const [results, setResults] = useState(mockResult);

  useEffect(() => {
    props.getPropertyLocations();
    props.getPropertyTypes();
    props.getIrsCategories();
    props.getIrsDependentsList();
    props.getIrsCategoryRegions();
    props.getPropertyTypologies();
    props.getPropertyConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  const validationSchema = yup.object().shape({
    currentIrsRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      // eslint-disable-next-line consistent-return
      .when(['taxResidentInPortugal'], taxResidentInPortugal => {
        if (taxResidentInPortugal) {
          return yup
            .number()
            .transform(v => (v === '' || Number.isNaN(v) ? null : v))
            .nullable()
            .required('inputRequired');
        }
      }),
  });

  const handleAnalyze = useCallback(() => {
    validationSchema
      .validate(props.inputs, {
        abortEarly: false,
      })
      .then(() => {
        props.getAnalysis(props.inputs);
        props.setAnalyzeButtonDisabled(true);
        setResults(mockResult);
      })
      .catch(error => {
        if (error.inner && error.inner.length > 0) {
          error.inner.forEach(item => {
            props.setInputError(
              item.path,
              props.intl.formatMessage({
                ...messages[item.message],
              }),
            );
          });
        }
      });
  }, [props, mockResult]);

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    props.setInputValue(name, value);
    props.setInputError(name, '');
    props.setAnalyzeButtonDisabled(false);

    if (name === 'acquisitionType') {
      if (value === 'acquisition.type.permanent.housing') {
        props.setInputValue('capitalGainsTaxBaseRate', 50);
        props.setInputError('capitalGainsTaxBaseRate', '');
      } else if (value === 'acquisition.type.investment') {
        props.setInputValue('capitalGainsTaxBaseRate', 100);
        props.setInputError('capitalGainsTaxBaseRate', '');
      }
    }
  }, []);

  const handleChangeSwitch = useCallback(event => {
    const { name, checked } = event.target;
    if (checked) {
      props.setInputValue(name, true);
    } else {
      props.setInputValue(name, false);
    }
    props.setAnalyzeButtonDisabled(false);
  }, []);

  const handleSliderChange = useCallback((name, value) => {
    props.setInputValue(name, value);
    props.setInputError(name, '');
    props.setAnalyzeButtonDisabled(false);
  }, []);

  function renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Property
            {...props}
            classes={classes}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
          />
        );
      case 1:
        return (
          <Proposal
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            handleSliderChange={handleSliderChange}
          />
        );
      case 2:
        return (
          <Financing
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            handleSliderChange={handleSliderChange}
          />
        );
      case 3:
        return (
          <Rehab
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            handleSliderChange={handleSliderChange}
          />
        );
      case 4:
        return (
          <Rent
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
          />
        );
      case 5:
        return (
          <OperatingCosts
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            handleSliderChange={handleSliderChange}
          />
        );
      case 6:
        return (
          <Tax
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            handleSliderChange={handleSliderChange}
          />
        );
      case 7:
        return (
          <Sale
            {...props}
            classes={classes}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onNextClick={() => props.setActiveStep(props.activeStep + 1)}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
          />
        );
      case 8:
        return (
          <Capital
            {...props}
            classes={classes}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            onBackClick={() => props.setActiveStep(props.activeStep - 1)}
            onSubmit={handleAnalyze}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  const classes = useStyles();

  function renderStepper() {
    return (
      <Grid item xs={4}>
        <Stepper
          orientation="vertical"
          activeStep={props.activeStep}
          className={classes.stepperContainer}
        >
          {steps.map((step, idx) => (
            <Step key={idx}>
              <StepLabel>
                <p className={classes.stepperLabel}>
                  {props.intl.formatMessage({
                    ...messages[step.label],
                  })}
                </p>
                <p className={classes.stepperDetail}>
                  {props.intl.formatMessage({
                    ...messages[step.detail],
                  })}
                </p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    );
  }

  function renderTable() {
    return (
      <Grid container className={classes.tableContainer} spacing={6}>
        <Grid item xs={12}>
          <div className={classes.searchHeaderContainer}>
            <span className={classes.searchHeaderMSG}>
              {props.intl.formatMessage({
                ...messages.searchResultMSG,
              })}
            </span>
            <Sorter values={filterValues} intl={props.intl} />
          </div>
        </Grid>
        {results.map((item, idx) => (
          <Grid item xs={12} md={6} lg={6} key={idx}>
            <ItemInfo item={item} {...props} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {props.intl.formatMessage({
            ...messages.fixAndFlipTitle,
          })}
        </title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      <div className={classes.pageTitleContainer}>
        <span className={classes.pageTitle}>
          {props.intl.formatMessage({
            ...messages.pageTitle,
          })}
        </span>
      </div>
      <div className="mt-10">
        <Grid container spacing={4}>
          {renderStepper()}
          <Grid item xs={8}>
            <div className={classes.contentContainer}>
              {renderStepContent(props.activeStep)}
            </div>
          </Grid>
        </Grid>
        <div className="p-24">{renderTable()}</div>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  inputs: makeSelectInputs(),
  errors: makeSelectErrors(),
  analysis: makeSelectAnalysis(),
  propertyLocations: makeSelectPropertyLocations(),
  propertyTypes: makeSelectPropertyTypes(),
  propertyTypologies: makeSelectPropertyTypologies(),
  propertyConditions: makeSelectPropertyConditions(),
  acquisitionTypes: makeSelectAcquisitionTypes(),
  irsCategories: makeSelectIrsCategories(),
  irsCategoryRegions: makeSelectIrsCategoryRegions(),
  irsDependentsList: makeSelectIrsDependentsList(),
  percentiles: makeSelectCIPs(),
  isGettingAnalysis: makeSelectIsGettingAnalysis(),
  analyzeButtonDisabled: makeSelectAnalyzeButtonDisabled(),
  activeStep: makeSelectActiveStep(),
  advanceOptionsStatus: makeSelectAdvanceOptionsStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPropertyLocations: () => dispatch(getPropertyLocations()),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getIrsCategories: () => dispatch(getIrsCategories()),
    getIrsCategoryRegions: () => dispatch(getIrsCategoryRegions()),
    getIrsDependentsList: () => dispatch(getIrsDependentsList()),
    getCIPs: () => dispatch(getCIPs()),
    getAnalysis: inputs => dispatch(getAnalysis(inputs)),
    setPropertyLocation: propertyLocation =>
      dispatch(setPropertyLocation(propertyLocation)),
    setInputValue: (input, value) => dispatch(setInputValue(input, value)),
    setInputError: (input, error) => dispatch(setInputError(input, error)),
    setAnalyzeButtonDisabled: value =>
      dispatch(setAnalyzeButtonDisabled(value)),
    setActiveStep: activeStep => dispatch(setActiveStep(activeStep)),
    setAdvanceOptionsStatus: (name, status) =>
      dispatch(setAdvanceOptionsStatus(name, status)),
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
)(FixAndFlip);
