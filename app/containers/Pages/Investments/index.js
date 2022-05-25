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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import { DataGrid } from '@material-ui/data-grid';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import AutoComplete from 'components/AutoComplete';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import PaperMap from 'components/PaperMap';
import messages from './messages';
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
        console.log(props);
        props.getAnalysisData(props.inputs);
        props.setAnalyzeButtonDisabled(true);
      })
      .catch(error => {
        console.log(error.inner);
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
              ...messages.propertyInformation,
            })}
          </Typography>
        </Grid>
        <Grid item container xs>
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
                  popupIcon={<SearchIcon />}
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
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.propertyType}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.propertyType,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.propertyType}
                  name="propertyType"
                  onChange={handleChange}
                >
                  {props.propertyTypes.map(value => (
                    <MenuItem key={value.name} value={value.name}>
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{props.errors.propertyType}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.propertyTypology}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.propertyTypology,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.propertyTypology}
                  name="propertyTypology"
                  onChange={handleChange}
                >
                  {props.propertyTypologies.map(value => (
                    <MenuItem key={value.name} value={value.name}>
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{props.errors.propertyTypology}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.propertyCondition}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.propertyCondition,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.propertyCondition}
                  name="propertyCondition"
                  onChange={handleChange}
                >
                  {props.propertyConditions.map(value => (
                    <MenuItem key={value.name} value={value.name}>
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {props.errors.propertyCondition}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.minAskingPrice}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.minAskingPrice,
                  })}
                </InputLabel>
                <Input
                  onChange={handleChange}
                  type="number"
                  defaultValue={props.inputs.minAskingPrice}
                  name="minAskingPrice"
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                />
                <FormHelperText>{props.errors.minAskingPrice}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.maxAskingPrice}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.maxAskingPrice,
                  })}
                </InputLabel>
                <Input
                  onChange={handleChange}
                  type="number"
                  defaultValue={props.inputs.maxAskingPrice}
                  name="maxAskingPrice"
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                />
                <FormHelperText>{props.errors.maxAskingPrice}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.minUsefulArea}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.minUsefulArea,
                  })}
                </InputLabel>
                <Input
                  onChange={handleChange}
                  type="number"
                  defaultValue={props.inputs.minUsefulArea}
                  name="minUsefulArea"
                  startAdornment={
                    <InputAdornment position="start">m²</InputAdornment>
                  }
                />
                <FormHelperText>{props.errors.minUsefulArea}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.maxUsefulArea}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.maxUsefulArea,
                  })}
                </InputLabel>
                <Input
                  onChange={handleChange}
                  type="number"
                  defaultValue={props.inputs.maxUsefulArea}
                  name="maxUsefulArea"
                  startAdornment={
                    <InputAdornment position="start">m²</InputAdornment>
                  }
                />
                <FormHelperText>{props.errors.maxUsefulArea}</FormHelperText>
              </FormControl>
            </Grid>
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
                  ...messages.investmentInformation,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderInvestmentInformationAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.otherInvestmentInformation,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderOtherInvestmentInformationAccordion()}
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

  function renderInvestmentInformationAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.minCapital}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.minCapital,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.minCapitalInfo,
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
              defaultValue={props.inputs.minCapital}
              name="minCapital"
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.minCapital}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.maxCapital}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.maxCapital,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.maxCapitalInfo,
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
              defaultValue={props.inputs.maxCapital}
              name="maxCapital"
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.maxCapital}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.bidAskRate}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.bidAskRate,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.bidAskRateInfo,
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
              defaultValue={props.inputs.bidAskRate}
              name="bidAskRate"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.bidAskRate}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.housePriceIndexRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.housePriceIndexRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.housePriceIndexRateInfo,
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
                defaultValue={props.inputs.housePriceIndexRate}
                name="housePriceIndexRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.minCapital}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.financingRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.financingRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.financingRateInfo,
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
                defaultValue={props.inputs.financingRate}
                name="financingRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.financingRate}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.minProfit}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.minProfit,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.minProfitInfo,
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
                defaultValue={props.inputs.minProfit}
                name="minProfit"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.minProfit}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderOtherInvestmentInformationAccordion() {
    return (
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        className="mb-10"
      >
        {renderAcquisitionAssumptions()}
        {renderFinanceAssumptions()}
        {renderOperatingAssumptions()}
        {renderExitAssumptions()}
      </Grid>
    );
  }

  function renderAcquisitionAssumptions() {
    return (
      <Grid container item>
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.acquisitionAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.acquisitionType,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.acquisitionTypeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Select
                defaultValue={props.inputs.acquisitionType}
                name="acquisitionType"
                onChange={handleChange}
              >
                {props.acquisitionTypes.map(value => (
                  <MenuItem key={value.name} value={value.name}>
                    {value.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.entryBrokerRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.entryBrokerRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.entryBrokerRateInfo,
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
                defaultValue={props.inputs.entryBrokerRate}
                name="entryBrokerRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.entryBrokerRate}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.stampDutyRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.stampDutyRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.stampDutyRateInfo,
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
                defaultValue={props.inputs.stampDutyRate}
                name="stampDutyRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.stampDutyRate}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={4}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.landRegistryInscriptionWithMortgage}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.landRegistryInscriptionWithMortgage,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryInscriptionWithMortgageInfo,
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
                defaultValue={props.inputs.landRegistryInscriptionWithMortgage}
                name="landRegistryInscriptionWithMortgage"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.landRegistryInscriptionWithMortgage}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.landRegistryInscriptionWithoutMortgage}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.landRegistryInscriptionWithoutMortgage,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryInscriptionWithoutMortgageInfo,
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
                defaultValue={
                  props.inputs.landRegistryInscriptionWithoutMortgage
                }
                name="landRegistryInscriptionWithoutMortgage"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.landRegistryInscriptionWithoutMortgage}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderFinanceAssumptions() {
    return (
      <Grid container item className="mt-20">
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.financeAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.interestRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.interestRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.interestRateInfo,
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
                defaultValue={props.inputs.interestRate}
                name="interestRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.interestRate}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.bankCommission}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.bankCommission,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.bankCommissionInfo,
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
                defaultValue={props.inputs.bankCommission}
                name="bankCommission"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.bankCommission}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.amortization}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.amortization,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.amortizationInfo,
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
                defaultValue={props.inputs.amortization}
                name="amortization"
                startAdornment={
                  <InputAdornment position="start">Years</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.amortization}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.stampDutyMortgageRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.stampDutyMortgageRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.stampDutyMortgageRateInfo,
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
                defaultValue={props.inputs.stampDutyMortgageRate}
                name="stampDutyMortgageRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.stampDutyMortgageRate}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.stampDutyInterestRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.stampDutyInterestRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.stampDutyInterestRateInfo,
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
                defaultValue={props.inputs.stampDutyInterestRate}
                name="stampDutyInterestRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.stampDutyInterestRate}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.capexFinancingRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.capexFinancingRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capexFinancingRate,
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
                defaultValue={props.inputs.capexFinancingRate}
                name="capexFinancingRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.capexFinancingRate}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderOperatingAssumptions() {
    return (
      <Grid container item className="mt-20">
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.operatingAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.condominiumCosts}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.condominiumCosts,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.condominiumCostsInfo,
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
                defaultValue={props.inputs.condominiumCosts}
                name="condominiumCosts"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.condominiumCosts}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.propertyTaxRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.propertyTaxRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.propertyTaxRateInfo,
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
                defaultValue={props.inputs.propertyTaxRate}
                name="propertyTaxRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.propertyTaxRate}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.capex}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.capex,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capex,
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
                defaultValue={props.inputs.capex}
                name="capex"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.capex}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.multiRiskInsurance}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.multiRiskInsurance,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.multiRiskInsurance,
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
                defaultValue={props.inputs.multiRiskInsurance}
                name="capex"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.multiRiskInsurance}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.lifeInsurance}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.lifeInsurance,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.lifeInsurance,
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
                defaultValue={props.inputs.lifeInsurance}
                name="capex"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.lifeInsurance}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderExitAssumptions() {
    return (
      <Grid container item className="mt-20">
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.exitAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.timeToSale}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.timeToSale,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.timeToSaleInfo,
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
                defaultValue={props.inputs.timeToSale}
                name="timeToSale"
                startAdornment={
                  <InputAdornment position="start">Month</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.timeToSale}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.earlyRepaymentRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.earlyRepaymentRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.earlyRepaymentRateInfo,
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
                defaultValue={props.inputs.earlyRepaymentRate}
                name="earlyRepaymentRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.earlyRepaymentRate}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.exitBrokerRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.exitBrokerRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.exitBrokerRateInfo,
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
                defaultValue={props.inputs.exitBrokerRate}
                name="exitBrokerRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.exitBrokerRate}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.irsRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.irsRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.irsRateInfo,
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
                defaultValue={props.inputs.irsRate}
                name="irsRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.irsRate}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.capitalGainsTaxRate}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.capitalGainsTaxRate,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capitalGainsTaxRateInfo,
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
                defaultValue={props.inputs.capitalGainsTaxRate}
                name="capitalGainsTaxRate"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.capitalGainsTaxRate}
              </FormHelperText>
            </FormControl>
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
          <FormControl variant="standard" className="w-100">
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.grossAreaToUsefulAreaRate,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.grossAreaToUsefulAreaRateInfo,
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
              defaultValue={props.inputs.grossAreaToUsefulAreaRate}
              name="grossAreaToUsefulAreaRate"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>
              {props.errors.grossAreaToUsefulAreaRate}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.floorRate}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.floorRate,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.floorRateInfo,
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
              defaultValue={props.inputs.floorRate}
              name="floorRate"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.floorRate}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.capRate}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.capRate,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.capRateInfo,
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
              defaultValue={props.inputs.capRate}
              name="capRate"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.capRate}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.confidencialImobiliarioPercentile,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.confidencialImobiliarioPercentileInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Select
                defaultValue={props.inputs.ciPercentile}
                name="ciPercentile"
                onChange={handleChange}
              >
                {props.ciPercentiles.map(value => (
                  <MenuItem key={value.name} value={value.label}>
                    {value.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
      <Grid container direction="column" className="w-100">
        <Grid item className="pb-20">
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.investments,
            })}
          </Typography>
        </Grid>
        <Grid item className="w-100 h-500">
          <DataGrid
            rows={props.analysisData}
            columns={translateColumnLabel(columns)}
            // checkboxSelection
            disableColumnFilter
            disableColumnMenu
            disableColumnSelector
            disableSelectionOnClick
            sortingMode="server"
            hideFooterPagination
            hideFooter
            density="compact"
            autoHeight
            autoPageSize
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
        color="primary"
        variant="contained"
        onClick={onSubmit}
        className={classes.customizeBtn}
        // disabled={props.analyzeButtonDisabled}
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
