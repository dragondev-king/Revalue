/* eslint-disable react/no-array-index-key */
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import * as yup from 'yup';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomSwitch from 'components/CustomSwitch';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInput';
import messages from 'containers/Pages/FixAndFlip/messages';
import {
  makeSelectPropertyTypes,
  makeSelectPropertyTypologies,
  makeSelectPropertyConditions,
  makeSelectCIPs,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectAcquisitionTypes,
  makeSelectAnalyzeButtonDisabled,
  makeSelectNewPropertyAnalysisPageReady,
  makeSelectAnalysisData,
  makeSelectIsGettingPropertyAnalysisById,
  /* TODO IRS makeSelectIrsCategories,
  makeSelectIrsCategoryRegions,
  makeSelectIrsDependentsList, */
} from 'containers/Pages/Analysis/selectors';
import reducer from 'containers/Pages/Analysis/reducer';
import {
  getPropertyAnalysisById,
  setAnalyzeButtonDisabled,
  setInputError,
  setInputValue,
  setNewPropertyAnalysisPageReadyNull,
  /* TODO IRS getIrsCategories,
  getIrsCategoryRegions,
  getIrsDependentsList, */
} from 'containers/Pages/Analysis/actions';

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
  customizeButton: {
    color: '#FFFFFF',
    margin: '30px 0 50px',
    background: '#0085FF !important',
    borderRadius: '7px',
    width: '286px',
    height: '44px',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '16px',
  },
  customizeDisabledButton: {
    color: 'rgba(0, 0, 0, 0.26)',
    boxShadow: 'none',
    margin: '30px 0 50px',
    backgroundColor: 'rgba(0, 0, 0, 0.12) !important',
    borderRadius: '7px',
    width: '286px',
    height: '44px',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '16px',
  },
  tableContainer: {
    background: '#FFFFFF',
    padding: '30px 25px',
    width: '100%',
  },
  tableHeading: {
    color: '#31342B !important',
    fontSize: '24px',
    textTransform: 'capitalize',
    marginBottom: '24px',
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
  gridRoot: {
    border: 0,
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
  loading: {
    marginTop: '2px',
    marginBottom: '2px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  accordion: {
    width: '100%',
    marginTop: '32px',
  },
  validation: {
    color: '#bf1650',
  },
  searchIcon: {
    marginRight: '10px',
    color: '#0083FC',
  },
  preferences: {
    fontWeight: 'bold !important',
  },
  investment: {
    marginTop: '5px',
    fontSize: '18px',
  },
}));

export function DrawerContent(props) {
  useInjectReducer({ key: 'analysis', reducer });
  useEffect(() => {
    if (props.newPropertyAnalysisPageReady) {
      const path = window.location.pathname;
      const id = path.split('/').pop();
      window.open(
        path.replace(id, props.newPropertyAnalysisPageReady),
        '_blank',
        'noopener,noreferrer',
      );
    }
    props.setNewPropertyAnalysisPageReadyNull();
  }, props.newPropertyAnalysisPageReady);

  const validationSchema = yup.object().shape({
    financingRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    bidAskRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    housePriceIndexRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    acquisitionBrokerRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    acquisitionStampDutyRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    landRegistryInscription: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    bankCommissionRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    stampDutyMortgageRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    stampDutyInterestRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    interestRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    capexFinancingRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    earlyRepaymentRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    amortization: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    condominiumCosts: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    propertyTaxRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    capexPerSquareMeter: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    multiRiskInsurance: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    lifeInsurance: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    taxResidentInPortugal: yup
      .boolean()
      .nullable()
      .required('inputRequired'),
    capitalGainsTaxRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
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
    timeToSale: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    exitBrokerRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    grossAreaToUsefulAreaRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    floorRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    capRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
  });

  const onSubmit = () => {
    validationSchema
      .validate(props.inputs, {
        abortEarly: false,
      })
      .then(() => {
        props.getPropertyAnalysisById(props.analysis.property.id, props.inputs);
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
  };

  function handleChange(event) {
    const { name, value } = event.target;
    props.setInputValue(name, value);
    props.setInputError(name, '');
    props.setAnalyzeButtonDisabled(false);

    if (name === 'acquisitionType') {
      if (value === 'acquisition.type.permanent.housing') {
        props.setInputValue('capitalGainsTaxRate', 50);
        props.setInputError('capitalGainsTaxRate', '');
      } else if (value === 'acquisition.type.investment') {
        props.setInputValue('capitalGainsTaxRate', 100);
        props.setInputError('capitalGainsTaxRate', '');
      }
    }
  }

  function handleChangeSwitch(event) {
    const { name, checked } = event.target;
    if (checked) {
      props.setInputValue(name, true);
    } else {
      props.setInputValue(name, false);
    }
    props.setAnalyzeButtonDisabled(false);
  }

  const classes = useStyles();

  function renderPropertyForm() {
    return (
      <Grid container direction="column" justifyContent="flex-start">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h5" className={classes.preferences}>
              {props.intl.formatMessage({
                ...messages.preferencesFor,
              })}
            </Typography>
            <Typography variant="h4" className={classes.investment}>
              {props.intl.formatMessage({
                ...messages.MainInvestmentInformation,
              })}
            </Typography>
          </Box>
          <CloseIcon
            onClick={() => props.setOpen(false)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <Grid item container spacing={2} className="mt-0">
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.financingRate}
              name="financingRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.financingRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.financingRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.financingRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.bidAskRate}
              name="bidAskRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.bidAskRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.bidAskRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.bidAskRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.housePriceIndexRate}
              name="housePriceIndexRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.housePriceIndexRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.housePriceIndexRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.housePriceIndexRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              error={null}
              defaultValue={props.inputs.ciPercentile}
              handleChange={handleChange}
              value={props.inputs.ciPercentile}
              data={props.ciPercentiles}
              name="ciPercentile"
              tooltipText={props.intl.formatMessage({
                ...messages.percentileInfo,
              })}
              labelText={`${props.intl.formatMessage({
                ...messages.percentile,
              })} *`}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderAccordionGroup() {
    return (
      <Grid container direction="column" className="w-100 pt-30">
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.propertyInformation,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderPropertyInformationAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.acquisitionAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderAcquisitionAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.financeAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderFinancingAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.operatingAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderOperatingAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {' '}
                {props.intl.formatMessage({
                  ...messages.taxAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderTaxAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.exitAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderExitAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.valuationModelConfiguration,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderValuationModelConfigurationAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    );
  }

  function renderPropertyInformationAccordion() {
    return (
      <Grid item container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <CustomSelect
              error={props.errors.propertyType}
              defaultValue={props.inputs.propertyType}
              handleChange={handleChange}
              data={props.propertyTypes}
              name="propertyType"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTypeInfo,
              })}
              labelText={`${props.intl.formatMessage({
                ...messages.propertyType,
              })} *`}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              error={props.errors.propertyTypology}
              defaultValue={props.inputs.propertyTypology}
              handleChange={handleChange}
              data={props.propertyTypologies}
              name="propertyTypology"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTypologyInfo,
              })}
              labelText={`${props.intl.formatMessage({
                ...messages.propertyTypology,
              })} *`}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              error={props.errors.propertyCondition}
              defaultValue={props.inputs.propertyCondition}
              handleChange={handleChange}
              data={props.propertyConditions}
              name="propertyCondition"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyConditionInfo,
              })}
              labelText={`${props.intl.formatMessage({
                ...messages.propertyCondition,
              })} *`}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderAcquisitionAssumptionsAccordion() {
    return (
      <Grid item container spacing={6}>
        {renderAcquisitionAssumptions()}
      </Grid>
    );
  }

  function renderFinancingAssumptionsAccordion() {
    return (
      <Grid item container spacing={6}>
        {renderFinanceAssumptions()}
      </Grid>
    );
  }

  function renderOperatingAssumptionsAccordion() {
    return (
      <Grid item container spacing={6}>
        {renderOperatingAssumptions()}
      </Grid>
    );
  }

  function renderTaxAssumptionsAccordion() {
    return (
      <Grid item container spacing={6}>
        {renderTaxAssumptions()}
      </Grid>
    );
  }

  function renderExitAssumptionsAccordion() {
    return (
      <Grid item container>
        {renderExitAssumptions()}
      </Grid>
    );
  }

  function renderAcquisitionAssumptions() {
    return (
      <Grid container item>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <CustomSelect
              error={null}
              defaultValue={props.inputs.acquisitionType}
              handleChange={handleChange}
              data={props.acquisitionTypes}
              name="acquisitionType"
              labelText={`${props.intl.formatMessage({
                ...messages.acquisitionType,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.acquisitionTypeInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.acquisitionBrokerRate}
              name="acquisitionBrokerRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.acquisitionBrokerRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.acquisitionBrokerRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.acquisitionBrokerRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.acquisitionStampDutyRate}
              name="acquisitionStampDutyRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.acquisitionStampDutyRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.acquisitionStampDutyRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.acquisitionStampDutyRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.landRegistryInscription}
              name="landRegistryInscription"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.landRegistryInscription}
              symbol={<span>&#8364;</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.landRegistryInscription,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.landRegistryInscriptionInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSwitch
              defaultValue={props.inputs.realEstateTransferTax}
              handleChange={handleChangeSwitch}
              checked={props.inputs.realEstateTransferTax}
              color="primary"
              name="realEstateTransferTax"
              labelText={`${props.intl.formatMessage({
                ...messages.realEstateTransferTax,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.realEstateTransferTax,
              })}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderFinanceAssumptions() {
    return (
      <Grid container item>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.bankCommissionRate}
              name="bankCommissionRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.bankCommissionRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.bankCommissionRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.bankCommissionRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.stampDutyMortgageRate}
              name="stampDutyMortgageRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.stampDutyMortgageRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.stampDutyMortgageRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.stampDutyMortgageRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.stampDutyInterestRate}
              name="stampDutyInterestRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.stampDutyInterestRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.stampDutyInterestRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.stampDutyInterestRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.interestRate}
              name="interestRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.interestRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.interestRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.interestRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.capexFinancingRate}
              name="capexFinancingRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.capexFinancingRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.capexFinancingRate,
              })}`}
              tooltipText={props.intl.formatMessage({
                ...messages.capexFinancingRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.earlyRepaymentRate}
              name="earlyRepaymentRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.earlyRepaymentRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.earlyRepaymentRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.earlyRepaymentRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.amortization}
              name="amortization"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.amortization}
              symbol={
                <span>{props.intl.formatMessage({ ...messages.year })}</span>
              }
              labelText={props.intl.formatMessage({
                ...messages.amortization,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.amortizationInfo,
              })}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderOperatingAssumptions() {
    return (
      <Grid container item>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.condominiumCosts}
              name="condominiumCosts"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.condominiumCosts}
              symbol={<span>&#8364;</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.condominiumCosts,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.condominiumCostsInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.propertyTaxRate}
              name="propertyTaxRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.propertyTaxRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.propertyTaxRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTaxRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.capexPerSquareMeter}
              name="capexPerSquareMeter"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.capexPerSquareMeter}
              symbol={<span>€ / m²</span>}
              labelText={props.intl.formatMessage({
                ...messages.capexPerSquareMeter,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.capexPerSquareMeter,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.multiRiskInsurance}
              name="multiRiskInsurance"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.multiRiskInsurance}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.multiRiskInsurance,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.multiRiskInsuranceInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.lifeInsurance}
              name="lifeInsurance"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.lifeInsurance}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.lifeInsurance,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.lifeInsuranceInfo,
              })}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderTaxAssumptions() {
    return (
      <Grid container item>
        <Grid item container spacing={2}>
          <Grid
            item
            xs={!props.inputs.taxResidentInPortugal ? 8 : 12}
            className="py-0"
          >
            <CustomSwitch
              handleChange={handleChangeSwitch}
              checked={props.inputs.taxResidentInPortugal}
              name="taxResidentInPortugal"
              labelText={`${props.intl.formatMessage({
                ...messages.taxResidentInPortugal,
              })} *`}
            />
          </Grid>
          {!props.inputs.taxResidentInPortugal && (
            <Grid item xs={4}>
              <CustomInput
                name="irsRate"
                type="number"
                readOnly
                defaultValue={28}
                symbol={<span>%</span>}
                labelText={`${props.intl.formatMessage({
                  ...messages.irsRate,
                })} *`}
                tooltipText={props.intl.formatMessage({
                  ...messages.irsRate,
                })}
              />
            </Grid>
          )}
          {props.inputs.taxResidentInPortugal && (
            <>
              {/* TODO IRS <Grid item xs={6}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsCategory}
                  defaultValue={props.inputs.irsCategory}
                  handleChange={handleChange}
                  data={props.irsCategories}
                  name="irsCategory"
                  labelText={props.intl.formatMessage({
                    ...messages.irsCategory,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsCategory,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsCategoryRegion}
                  defaultValue={props.inputs.irsCategoryRegion}
                  handleChange={handleChange}
                  data={props.irsCategoryRegions}
                  labelText={props.intl.formatMessage({
                    ...messages.irsCategoryRegion,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsCategoryRegion,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsDependents}
                  defaultValue={props.inputs.irsDependents}
                  handleChange={handleChange}
                  data={props.irsDependentsList}
                  labelText={props.intl.formatMessage({
                    ...messages.irsDependents,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsDependents,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.grossSalary}
                  name="grossSalary"
                  type="number"
                  handleChange={handleChange}
                  defaultValue={props.inputs.grossSalary}
                  symbol={<span>€</span>}
                  labelText={props.intl.formatMessage({
                    ...messages.grossSalary,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.grossSalary,
                  })}
                />
              </Grid> */}
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.capitalGainsTaxRate}
                  name="capitalGainsTaxRate"
                  type="number"
                  value={props.inputs.capitalGainsTaxRate}
                  handleChange={handleChange}
                  defaultValue={props.inputs.capitalGainsTaxRate}
                  symbol={<span>%</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.capitalGainsTaxRate,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.capitalGainsTaxRateInfo,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.currentIrsRate}
                  name="currentIrsRate"
                  type="number"
                  handleChange={handleChange}
                  defaultValue={props.inputs.currentIrsRate}
                  symbol={<span>%</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.currentIrsRate,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.currentIrsRate,
                  })}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    );
  }

  function renderExitAssumptions() {
    return (
      <Grid container item>
        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.timeToSale}
              name="timeToSale"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.timeToSale}
              symbol={<span>Month</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.timeToSale,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.timeToSaleInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.exitBrokerRate}
              name="exitBrokerRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.exitBrokerRate}
              symbol={<span>%</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.exitBrokerRate,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.exitBrokerRateInfo,
              })}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderValuationModelConfigurationAccordion() {
    return (
      <Grid
        item
        container
        spacing={2}
        error={props.errors.grossAreaToUsefulAreaRate}
      >
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.grossAreaToUsefulAreaRate}
            name="grossAreaToUsefulAreaRate"
            type="number"
            handleChange={handleChange}
            defaultValue={props.inputs.grossAreaToUsefulAreaRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.grossAreaToUsefulAreaRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.grossAreaToUsefulAreaRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.floorRate}
            name="floorRate"
            type="number"
            handleChange={handleChange}
            defaultValue={props.inputs.floorRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.floorRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.floorRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.capRate}
            name="capRate"
            type="number"
            handleChange={handleChange}
            defaultValue={props.inputs.capRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.capRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.capRateInfo,
            })}
          />
        </Grid>
      </Grid>
    );
  }

  function renderButton() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Button
          type="submit"
          onClick={onSubmit}
          className={
            !props.analyzeButtonDisabled
              ? classes.customizeButton
              : classes.customizeDisabledButton
          }
          disabled={props.analyzeButtonDisabled}
        >
          {props.isGettingPropertyAnalysisById && (
            <CircularProgress size={20} className={classes.loading} />
          )}
          {!props.isGettingPropertyAnalysisById &&
            props.intl.formatMessage({
              ...messages.analyze,
            })}
        </Button>
      </div>
    );
  }

  return (
    <>
      <Grid>
        {renderPropertyForm()}
        {renderAccordionGroup()}
        {renderButton()}
      </Grid>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  inputs: makeSelectInputs(),
  errors: makeSelectErrors(),
  analysis: makeSelectAnalysisData(),
  propertyTypes: makeSelectPropertyTypes(),
  propertyTypologies: makeSelectPropertyTypologies(),
  propertyConditions: makeSelectPropertyConditions(),
  acquisitionTypes: makeSelectAcquisitionTypes(),
  ciPercentiles: makeSelectCIPs(),
  analyzeButtonDisabled: makeSelectAnalyzeButtonDisabled(),
  newPropertyAnalysisPageReady: makeSelectNewPropertyAnalysisPageReady(),
  isGettingPropertyAnalysisById: makeSelectIsGettingPropertyAnalysisById(),
  /* TODO IRS irsCategories: makeSelectIrsCategories(),
  irsCategoryRegions: makeSelectIrsCategoryRegions(),
  irsDependentsList: makeSelectIrsDependentsList(), */
});

function mapDispatchToProps(dispatch) {
  return {
    setInputValue: (input, value) => dispatch(setInputValue(input, value)),
    setInputError: (input, error) => dispatch(setInputError(input, error)),
    getPropertyAnalysisById: (id, inputs) =>
      dispatch(getPropertyAnalysisById(id, inputs)),
    setAnalyzeButtonDisabled: value =>
      dispatch(setAnalyzeButtonDisabled(value)),
    setNewPropertyAnalysisPageReadyNull: () =>
      dispatch(setNewPropertyAnalysisPageReadyNull()),
    dispatch,
    /* TODO IRS getIrsCategories: () => dispatch(getIrsCategories()),
    getIrsCategoryRegions: () => dispatch(getIrsCategoryRegions()),
    getIrsDependentsList: () => dispatch(getIrsDependentsList()), */
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
)(DrawerContent);
