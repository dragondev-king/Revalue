/* eslint-disable react/no-array-index-key */
import React, { memo, useCallback, useEffect } from 'react';
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
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

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
} from './actions';
import useStyles from './styles';

const steps = [
  {
    label: 'Location',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Proposal',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Financing',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Property Rehabilitation',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Lease',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Operational Costs',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Tax',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Sale Analysis',
    detail: 'Where do you want to Invest?',
  },
  {
    label: 'Capital Requirements',
    detail: 'Where do you want to Invest?',
  },
];

const columns = [
  {
    field: 'propertyLocation',
    label: 'location',
    sortable: false,
    unit: '',
    flex: 1,
  },
  {
    field: 'propertyAskingPrice',
    label: 'askingPrice',
    sortable: false,
    unit: '€',
    flex: 1,
  },
  {
    field: 'requiredInitialCapital',
    label: 'requiredInitialCapital',
    sortable: false,
    unit: '€',
    flex: 1,
  },
  {
    field: 'transactionPrice',
    label: 'transactionPrice',
    sortable: false,
    unit: '€',
    flex: 1,
  },
  {
    field: 'internalRateOfReturn',
    label: 'internalRateOfReturn',
    sortable: false,
    unit: '%',
    minWidth: 200,
  },
  {
    field: 'profitAfterTax',
    label: 'profitAfterTax',
    sortable: false,
    unit: '€',
    minWidth: 150,
  },
  {
    field: 'report',
    label: 'report',
    sortable: false,
    unit: '',
    minWidth: 70,
    renderCell: cellValues => {
      const path = 'analysis/';
      const id = cellValues.row.id.replace(/[.,\s]/g, '');
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <a
          style={{ color: '#0085FF', fontWeight: 'bolder', cursor: 'pointer' }}
          onClick={() =>
            window.open(path + id, '_blank', 'noopener,noreferrer')
          }
        >
          Report
        </a>
      );
    },
  },
];

export function FixAndFlip(props) {
  useInjectReducer({ key: 'investment', reducer });
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
  }, [props]);

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
                <h6>{step.label}</h6>
                <p>{step.detail}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    );
  }

  function translateColumnLabel(list) {
    list.forEach(item => {
      const unit = item.unit ? ` (${item.unit})` : '';
      // eslint-disable-next-line no-param-reassign
      item.headerName =
        props.intl.formatMessage({
          ...messages[item.label],
        }) + unit;
    });
    return list;
  }

  function renderTable() {
    return (
      <Grid container direction="column" className={classes.tableContainer}>
        <Grid item>
          <Typography variant="h6" className={classes.tableHeading}>
            {props.intl.formatMessage({
              ...messages.investments,
            })}
          </Typography>
        </Grid>
        <Grid item className="w-100">
          <DataGrid
            classes={{
              root: classes.gridRoot,
            }}
            rows={props.analysis}
            columns={translateColumnLabel(columns)}
            disableColumnFilter
            disableColumnMenu
            disableSelectionOnClick
            sortingMode="server"
            width="auto"
            autoHeight
            hideFooterPagination
            // checkboxSelection
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            // hideFooter
            // density="compact"
            // autoPageSize
            // onCellClick={}
            // onRowClick={event => {
            //   props.history.push(`/analysis/${event.id}`);
            // }}
          />
        </Grid>
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
      <Grid container spacing={4}>
        {renderStepper()}
        <Grid item xs={8}>
          <div className={classes.contentContainer}>
            {renderStepContent(props.activeStep)}
          </div>
        </Grid>
        {renderTable()}
      </Grid>
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
