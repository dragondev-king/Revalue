/* eslint-disable react/no-array-index-key */
import React, { memo, useEffect, useState } from 'react';
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
import Switch from '@material-ui/core/Switch';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import AutoComplete from 'components/AutoComplete';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import PaperMap from 'components/PaperMap';
import messages from './messages';
import CustomSelect from '../../../components/CustomSelect';
import CustomInput from '../../../components/CustomInput';
import {
  makeSelectPropertyTypes,
  makeSelectPropertyTypologies,
  makeSelectPropertyConditions,
  makeSelectPropertyLocations,
  makeSelectCIPs,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectAnalysisData,
  makeSelectIsGettingAnalysisData,
  makeSelectAcquisitionTypes,
  makeSelectAnalyzeButtonDisabled,
} from './selectors';
import reducer from './reducer';
import {
  getPropertyLocations,
  getPropertyTypes,
  getPropertyTypologies,
  getPropertyConditions,
  getAcquisitionTypes,
  getAnalysisData,
  getCIPs,
  setAnalyzeButtonDisabled,
  setInputError,
  setInputValue,
  setPropertyLocation,
} from './actions';

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
  fixHeight: {
    // minHeight: '300px',
    // maxHeight: '300px',
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
}));

const columns = [
  {
    field: 'location',
    label: 'location',
    sortable: false,
    width: 140,
  },
  {
    field: 'asking',
    label: 'asking',
    sortable: false,
    width: 130,
  },
  {
    field: 'capital',
    label: 'capital',
    sortable: false,
    width: 130,
  },
  {
    field: 'costs',
    label: 'costs',
    sortable: false,
    width: 130,
  },
  {
    field: 'price',
    label: 'price',
    sortable: false,
    width: 130,
  },
  {
    field: 'irr',
    label: 'irr',
    sortable: false,
    width: 130,
  },
  {
    field: 'profit',
    label: 'profit',
    sortable: false,
    width: 130,
  },
  {
    field: 'report',
    label: 'report',
    width: 130,
    sortable: false,
    renderCell: cellValues => (
      <Link to={`/analysis/${cellValues.row.id}`} style={{ color: '#7866f4' }}>
        Report
      </Link>
    ),
  },
];

export function Investments(props) {
  const [isSwitch, setIsSwitch] = useState(true);
  useInjectReducer({ key: 'investment', reducer });

  useEffect(() => {
    props.getPropertyLocations();
    props.getPropertyTypes();
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
    minCapital: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxCapital: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    bidAskRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    financingRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    entryBrokerRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    stampDutyRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    landRegistryInscriptionWithMortgage: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    landRegistryInscriptionWithoutMortgage: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    interestRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    bankCommission: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    amortization: yup
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
    timeToSale: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    irsRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    exitBrokerRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    earlyRepaymentRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    capitalGainsTaxRate: yup
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
    /* minObservationsForPercentile: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'), */
  });

  const onSubmit = () => {
    validationSchema
      .validate(props.inputs, {
        abortEarly: false,
      })
      .then(() => {
        props.getAnalysisData(props.inputs);
        props.setAnalyzeButtonDisabled(true);
      })
      .catch(error => {
        if (error.inner.length > 0) {
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
              error={props.errors.propertyLocation}
            >
              <AutoComplete
                value={props.inputs.propertyLocation}
                onChange={(event, newValue) => {
                  props.setPropertyLocation(newValue);
                  props.setInputError('propertyLocation', '');
                  props.setAnalyzeButtonDisabled(false);
                }}
                error={props.errors.propertyLocation}
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
              labelText={props.intl.formatMessage({
                ...messages.financingRate,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.bidAskRate,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.minProfit,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.housePriceIndexRate,
              })}
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
              symbol={<span>m²</span>}
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

          <Grid item xs={12}>
            <CustomSelect
              error={null}
              defaultValue={props.inputs.ciPercentile}
              handleChange={handleChange}
              data={props.ciPercentiles}
              name="ciPercentile"
              tooltipText={props.intl.formatMessage({
                ...messages.confidencialImobiliarioPercentileInfo,
              })}
              labelText={props.intl.formatMessage({
                ...messages.confidencialImobiliarioPercentile,
              })}
            />
          </Grid>
          {/*  <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.minObservationsForPercentile}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.minObservationsForPercentile,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.minObservationsForPercentileInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                onChange={handleChange}
                type="number"
                defaultValue={props.inputs.minObservationsForPercentile}
                name="minObservationsForPercentile"
                startAdornment={
                  <InputAdornment position="start">#</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.minObservationsForPercentile}</FormHelperText>
            </FormControl>
          </Grid> */}
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
              <Typography>Tax Assumptions</Typography>
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
                ...messages.propertyType,
              })}
              labelText={props.intl.formatMessage({
                ...messages.propertyType,
              })}
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
                ...messages.propertyTypology,
              })}
              labelText={props.intl.formatMessage({
                ...messages.propertyTypology,
              })}
            />
          </Grid>
          {/* This was not in the previous page but was in the figma - adding the field but content needs to be update */}
          <Grid item xs={4}>
            <CustomSelect
              error={props.errors.propertyTypology}
              defaultValue={props.inputs.propertyTypology}
              handleChange={handleChange}
              data={props.propertyTypologies}
              name="propertyTypology"
              labelText="Status"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTypology,
              })}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={4}>
            <CustomSelect
              error={props.errors.propertyCondition}
              defaultValue={props.inputs.propertyCondition}
              handleChange={handleChange}
              data={props.propertyConditions}
              name="propertyCondition"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyCondition,
              })}
              labelText={props.intl.formatMessage({
                ...messages.propertyCondition,
              })}
            />
          </Grid>
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
          </Grid>
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
              labelText={props.intl.formatMessage({
                ...messages.acquisitionType,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.acquisitionTypeInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.entryBrokerRate}
              name="entryBrokerRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.entryBrokerRate}
              symbol={<span>%</span>}
              labelText={props.intl.formatMessage({
                ...messages.entryBrokerRate,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.entryBrokerRateInfo,
              })}
            />
          </Grid>
          {/* It was not in the previous page but was in the figma - adding this but content needs to be updated */}
          <Grid item xs={4}>
            <CustomSelect
              error={null}
              defaultValue={props.inputs.acquisitionType}
              handleChange={handleChange}
              data={props.acquisitionTypes}
              name="acquisitionType"
              labelText="Reet"
              tooltipText={props.intl.formatMessage({
                ...messages.acquisitionTypeInfo,
              })}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.stampDutyRate}
              name="stampDutyRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.stampDutyRate}
              symbol={<span>%</span>}
              labelText={props.intl.formatMessage({
                ...messages.stampDutyRate,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.stampDutyRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.landRegistryInscriptionWithMortgage}
              name="landRegistryInscriptionWithMortgage"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.landRegistryInscriptionWithMortgage}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.landRegistryInscriptionWithMortgage,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.landRegistryInscriptionWithMortgageInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.landRegistryInscriptionWithoutMortgage}
              name="landRegistryInscriptionWithoutMortgage"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.landRegistryInscriptionWithoutMortgage}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.landRegistryInscriptionWithoutMortgage,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.landRegistryInscriptionWithoutMortgageInfo,
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
              error={props.errors.bankCommission}
              name="bankCommission"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.bankCommission}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.bankCommission,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.bankCommissionInfo,
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
              labelText={props.intl.formatMessage({
                ...messages.stampDutyMortgageRate,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.stampDutyInterestRate,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.interestRate,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.capexFinancingRate,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.earlyRepaymentRate,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.earlyRepaymentRateInfo,
              })}
            />
          </Grid>
          {/* Hide this field as it was not in the figma */}
          {/* <Grid item xs={4}>
            <CustomInput
              error={props.errors.amortization}
              name="amortization"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.amortization}
              symbol={<span>Years</span>}
              labelText={props.intl.formatMessage({
                ...messages.amortization,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.amortizationInfo,
              })}
            />
          </Grid> */}
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
              labelText={props.intl.formatMessage({
                ...messages.condominiumCosts,
              })}
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
              labelText={props.intl.formatMessage({
                ...messages.propertyTaxRate,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTaxRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.capex}
              name="capex"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.capex}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.capex,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.capex,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.multiRiskInsurance}
              name="capex"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.multiRiskInsurance}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.multiRiskInsurance,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.multiRiskInsurance,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              error={props.errors.lifeInsurance}
              name="capex"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.lifeInsurance}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.lifeInsurance,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.lifeInsurance,
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
          {/* This was not in the previous page but was in the figma - adding the field but content needs to be update */}
          <Grid item xs={12} className="py-0">
            <Switch
              onChange={e => setIsSwitch(e.target.checked)}
              checked={isSwitch}
              color="primary"
              name="taxAssumptionCheck"
            />
            Resident in Portugal
          </Grid>
          {/* This was not in the previous page but was in the figma - adding the field but content needs to be update */}
          <Grid item xs={4}>
            <CustomSelect
              disabled={!isSwitch}
              error={props.errors.propertyTypology}
              defaultValue={props.inputs.propertyTypology}
              handleChange={handleChange}
              data={props.propertyTypologies}
              name="propertyTypology"
              labelText="IRS Category"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTypology,
              })}
            />
          </Grid>
          {/* This was not in the previous page but was in the figma - adding the field but content needs to be update */}
          <Grid item xs={4}>
            <CustomSelect
              disabled={!isSwitch}
              error={props.errors.propertyTypology}
              defaultValue={props.inputs.propertyTypology}
              handleChange={handleChange}
              data={props.propertyTypologies}
              name="propertyTypology"
              labelText="Number of dependents"
              tooltipText={props.intl.formatMessage({
                ...messages.propertyTypology,
              })}
            />
          </Grid>
          {/* This was not in the previous page but was in the figma - adding the field but content needs to be update */}
          <Grid item xs={4}>
            <CustomInput
              disabled={!isSwitch}
              error={props.errors.irsRate}
              name="irsRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.irsRate}
              symbol={<span>€</span>}
              labelText="Current Monthly salary"
              tooltipText={props.intl.formatMessage({
                ...messages.irsRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              disabled={!isSwitch}
              error={props.errors.irsRate}
              name="irsRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.irsRate}
              symbol={<span>%</span>}
              labelText="Current IRS Rate"
              // labelText={props.intl.formatMessage({
              //   ...messages.irsRate,
              // })}
              tooltipText={props.intl.formatMessage({
                ...messages.irsRateInfo,
              })}
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              disabled={!isSwitch}
              error={props.errors.capitalGainsTaxRate}
              name="capitalGainsTaxRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.capitalGainsTaxRate}
              symbol={<span>%</span>}
              labelText={props.intl.formatMessage({
                ...messages.capitalGainsTaxRate,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.capitalGainsTaxRateInfo,
              })}
            />
          </Grid>
          {!isSwitch && (
            <Grid item xs={4}>
              <CustomInput
                error={props.errors.irs}
                name="irs"
                type="number"
                handleChange={handleChange}
                defaultValue={28}
                symbol={<span>%</span>}
                labelText={props.intl.formatMessage({
                  ...messages.irs,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.irs,
                })}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  }

  function renderExitAssumptions() {
    return (
      <Grid container item className="mt-20">
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <CustomInput
              error={props.errors.timeToSale}
              name="timeToSale"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.timeToSale}
              symbol={<span>Month</span>}
              labelText={props.intl.formatMessage({
                ...messages.timeToSale,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.timeToSaleInfo,
              })}
            />
          </Grid>
          <Grid item xs={3}>
            <CustomInput
              error={props.errors.exitBrokerRate}
              name="exitBrokerRate"
              type="number"
              handleChange={handleChange}
              defaultValue={props.inputs.exitBrokerRate}
              symbol={<span>%</span>}
              labelText={props.intl.formatMessage({
                ...messages.exitBrokerRate,
              })}
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
        <Grid item xs={3}>
          <CustomInput
            error={props.errors.grossAreaToUsefulAreaRate}
            name="grossAreaToUsefulAreaRate"
            type="number"
            handleChange={handleChange}
            defaultValue={props.inputs.grossAreaToUsefulAreaRate}
            symbol={<span>%</span>}
            labelText={props.intl.formatMessage({
              ...messages.grossAreaToUsefulAreaRate,
            })}
            tooltipText={props.intl.formatMessage({
              ...messages.grossAreaToUsefulAreaRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={3}>
          <CustomInput
            error={props.errors.floorRate}
            name="floorRate"
            type="number"
            handleChange={handleChange}
            defaultValue={props.inputs.floorRate}
            symbol={<span>%</span>}
            labelText={props.intl.formatMessage({
              ...messages.floorRate,
            })}
            tooltipText={props.intl.formatMessage({
              ...messages.floorRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={3}>
          <CustomInput
            error={props.errors.capRate}
            name="capRate"
            type="number"
            handleChange={handleChange}
            defaultValue={props.inputs.capRate}
            symbol={<span>%</span>}
            labelText={props.intl.formatMessage({
              ...messages.capRate,
            })}
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
      // eslint-disable-next-line no-param-reassign
      item.headerName = props.intl.formatMessage({
        ...messages[item.label],
      });
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
            // className={classes.root}
            classes={{
              root: classes.gridRoot,
            }}
            rows={props.analysisData}
            columns={translateColumnLabel(columns)}
            checkboxSelection
            disableColumnFilter
            disableColumnMenu
            disableColumnSelector
            disableSelectionOnClick
            sortingMode="server"
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            // hideFooterPagination
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
        {props.isGettingAnalysisData && (
          <CircularProgress size={20} className={classes.loading} />
        )}
        {!props.isGettingAnalysisData && 'Analyze'}
      </Button>
    );
  }

  function renderPropertyInformationAndMap() {
    return (
      <Grid item container direction="row">
        <Grid item container xs={8} className="pr-40">
          {renderPropertyForm()}
        </Grid>
        <Grid item xs={4} className={classes.fixHeight}>
          <PaperMap />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {props.intl.formatMessage({
            ...messages.title,
          })}
        </title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      <Grid>
        {renderPropertyInformationAndMap()}
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
  propertyLocations: makeSelectPropertyLocations(),
  propertyTypes: makeSelectPropertyTypes(),
  propertyTypologies: makeSelectPropertyTypologies(),
  propertyConditions: makeSelectPropertyConditions(),
  acquisitionTypes: makeSelectAcquisitionTypes(),
  ciPercentiles: makeSelectCIPs(),
  analysisData: makeSelectAnalysisData(),
  isGettingAnalysisData: makeSelectIsGettingAnalysisData(),
  analyzeButtonDisabled: makeSelectAnalyzeButtonDisabled(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPropertyLocations: () => dispatch(getPropertyLocations()),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getCIPs: () => dispatch(getCIPs()),
    getAnalysisData: inputs => dispatch(getAnalysisData(inputs)),
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
)(Investments);
