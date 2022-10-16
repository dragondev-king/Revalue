/* eslint-disable react/no-array-index-key */
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import AutoComplete from 'components/AutoComplete';
import Map from 'containers/Map';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
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
  /* TODO IRS getIrsCategories,
  getIrsCategoryRegions,
  getIrsDependentsList, */
} from './actions';

const useStyles = makeStyles(() => ({
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
  gridRoot: {
    border: 0,
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
  orText: {
    fontSize: '20px',
  },
}));

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
    renderCell: cellValues => (
      <Link to={`/analysis/${cellValues.row.id}`} style={{ color: '#7866f4' }}>
        Report
      </Link>
    ),
  },
];

export function FixAndFlip(props) {
  useInjectReducer({ key: 'investment', reducer });

  useEffect(() => {
    props.getPropertyLocations();
    props.getPropertyTypes();
    /*  TODO IRS  props.getIrsCategories();
    props.getIrsDependentsList();
    props.getIrsCategoryRegions(); */
    props.getPropertyTypologies();
    props.getPropertyConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  const validationSchema = yup.object().shape({
    propertyLocation: yup
      .string()
      .nullable()
      .required('inputRequired'),
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
    minProfit: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    housePriceIndexRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    minCapital: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxCapital: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    minAskingPrice: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxAskingPrice: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    minUsefulArea: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxUsefulArea: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
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
        <Grid item className="mb-15">
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.MainInvestmentInformation,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={12}>
            <FormControl
              variant="standard"
              className="w-100"
              error={!!props.errors.propertyLocation}
            >
              <AutoComplete
                value={props.inputs.propertyLocation}
                onChange={(event, newValue) => {
                  props.setPropertyLocation(newValue);
                  props.setInputError('propertyLocation', '');
                  props.setAnalyzeButtonDisabled(false);
                }}
                error={!!props.errors.propertyLocation}
                name="propertyLocation"
                defaultValue={props.inputs.propertyLocation}
                options={props.propertyLocations}
                label={props.intl.formatMessage({
                  ...messages.propertyLocation,
                })}
                popupIcon={<SearchIcon className={classes.searchIcon} />}
                renderOption={(option, value) => {
                  const matches = match(option, value.inputValue);
                  const parts = parse(option, matches);
                  return (
                    <div>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{ fontWeight: part.highlight ? 700 : 400 }}
                        >
                          {part.text}
                        </span>
                      ))}
                    </div>
                  );
                }}
              />
              <FormHelperText>{props.errors.propertyLocation}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={3} className="mt-0">
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
              error={props.errors.minProfit}
              name="minProfit"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.minProfit}
              symbol={<span>&#8364;</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.minProfit,
              })}`}
              tooltipText={props.intl.formatMessage({
                ...messages.minProfitInfo,
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
            <CustomInput
              error={props.errors.minCapital}
              name="minCapital"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.minCapital}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.minCapital,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.minCapitalInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.maxCapital}
              name="maxCapital"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.maxCapital}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.maxCapital,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.maxCapitalInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              error={null}
              defaultValue={props.inputs.ciPercentile}
              handleChange={handleChange}
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
      <Grid item container spacing={6} className="mb-10">
        <Grid item container spacing={6}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.minAskingPrice}
              name="minAskingPrice"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.minAskingPrice}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.minAskingPrice,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.minAskingPrice,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.maxAskingPrice}
              name="maxAskingPrice"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.maxAskingPrice}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.maxAskingPrice,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.maxAskingPrice,
              })}
            />
          </Grid>{' '}
          <Grid item container spacing={6}>
            <Grid item xs={4}>
              <CustomInput
                error={props.errors.minUsefulArea}
                name="minUsefulArea"
                type="number"
                handleChange={handleChange}
                defaultValue={props.inputs.minUsefulArea}
                symbol={<span>m²</span>}
                labelText={props.intl.formatMessage({
                  ...messages.minUsefulArea,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.minUsefulArea,
                })}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomInput
                error={props.errors.maxUsefulArea}
                name="maxUsefulArea"
                type="number"
                handleChange={handleChange}
                defaultValue={props.inputs.maxUsefulArea}
                symbol={<span>m²</span>}
                labelText={props.intl.formatMessage({
                  ...messages.maxUsefulArea,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.maxUsefulArea,
                })}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderAcquisitionAssumptionsAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
        {renderAcquisitionAssumptions()}
      </Grid>
    );
  }

  function renderFinancingAssumptionsAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
        {renderFinanceAssumptions()}
      </Grid>
    );
  }

  function renderOperatingAssumptionsAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
        {renderOperatingAssumptions()}
      </Grid>
    );
  }

  function renderTaxAssumptionsAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
        {renderTaxAssumptions()}
      </Grid>
    );
  }

  function renderExitAssumptionsAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
        {renderExitAssumptions()}
      </Grid>
    );
  }

  function renderAcquisitionAssumptions() {
    return (
      <Grid container item>
        <Grid item container spacing={6}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
                ...messages.realEstateTransferTaxInfo,
              })}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderFinanceAssumptions() {
    return (
      <Grid container item className="mt-20">
        <Grid item container spacing={6}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
                ...messages.capexFinancingRate,
              })}
            />
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.amortization}
              name="amortization"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.amortization}
              symbol={
                <span>{props.intl.formatMessage({ ...messages.year })}</span>
              }
              labelText={`${props.intl.formatMessage({
                ...messages.amortization,
              })} *`}
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
      <Grid container item className="mt-20">
        <Grid item container spacing={6}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
                ...messages.capexPerSquareMeterInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
      <Grid container item className="mt-20">
        <Grid item container spacing={6}>
          <Grid
            item
            xs={!props.inputs.taxResidentInPortugal ? 4 : 12}
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
            <>
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
              <Grid item xs={4}>
                <></>
              </Grid>
            </>
          )}
          {props.inputs.taxResidentInPortugal && (
            <>
              {/*  TODO IRS   <Grid item xs={4}>
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
              <Grid item xs={4}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsCategoryRegion}
                  defaultValue={props.inputs.irsCategoryRegion}
                  name="irsCategoryRegion"
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
              <Grid item xs={4}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsDependents}
                  name="irsDependents"
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
              <Grid item xs={4}>
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
              </Grid>
              <Grid item xs={4} className={classes.orText}>
                {props.intl.formatMessage({
                  ...messages.or,
                })}
              </Grid> */}
              <Grid item xs={4}>
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
              <Grid item xs={4}>
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
      <Grid container item className="mt-20">
        <Grid item container spacing={6}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
        spacing={6}
        className="mb-10"
        error={props.errors.grossAreaToUsefulAreaRate}
      >
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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

  function renderButton() {
    return (
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
        {props.isGettingAnalysis && (
          <CircularProgress size={20} className={classes.loading} />
        )}
        {!props.isGettingAnalysis &&
          props.intl.formatMessage({
            ...messages.analyze,
          })}
      </Button>
    );
  }

  function renderAnalysisInformationAndMap() {
    return (
      <Grid item container direction="row">
        <Grid item container xs={8} className="pr-40">
          {renderPropertyForm()}
        </Grid>
        <Grid item xs={4}>
          <Map propertyLocation={props.inputs.propertyLocation} />
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
      <Grid>
        {renderAnalysisInformationAndMap()}
        {renderAccordionGroup()}
        {renderButton()}
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
  ciPercentiles: makeSelectCIPs(),
  isGettingAnalysis: makeSelectIsGettingAnalysis(),
  analyzeButtonDisabled: makeSelectAnalyzeButtonDisabled(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPropertyLocations: () => dispatch(getPropertyLocations()),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    /* TODO IRS getIrsCategories: () => dispatch(getIrsCategories()),
    getIrsCategoryRegions: () => dispatch(getIrsCategoryRegions()),
    getIrsDependentsList: () => dispatch(getIrsDependentsList()), */
    getCIPs: () => dispatch(getCIPs()),
    getAnalysis: inputs => dispatch(getAnalysis(inputs)),
    setPropertyLocation: propertyLocation =>
      dispatch(setPropertyLocation(propertyLocation)),
    setInputValue: (input, value) => dispatch(setInputValue(input, value)),
    setInputError: (input, error) => dispatch(setInputError(input, error)),
    setAnalyzeButtonDisabled: value =>
      dispatch(setAnalyzeButtonDisabled(value)),
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
