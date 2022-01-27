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
import messages from './messages';
import PaperMap from '../../../components/PaperMap';
import {
  makeSelectLocations,
  makeSelectTypes,
  makeSelectTypologies,
  makeSelectConditions,
  makeSelectCIPs,
  makeSelectInputs,
  makeSelectErrors,
  makeSelectAnalysisData,
  makeSelectIsGettingAnalysisData,
  makeSelectAcquisitionTypes,
  makeSelectAnalyzeButtonDisabled,
  makeSelectStatus,
} from './selectors';
import reducer from './reducer';
import {
  getLocations,
  getTypes,
  getTypologies,
  getConditions,
  getAcquisitionTypes,
  getAnalysisData,
  getCIPs,
  setAnalyzeButtonDisabled,
  getStatus,
  setInputError,
  setInputValue,
  setLocation,
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
    width: 140,
  },
  {
    field: 'asking',
    label: 'asking',
    width: 130,
  },
  {
    field: 'capital',
    label: 'capital',
    width: 130,
  },
  {
    field: 'costs',
    label: 'costs',
    width: 130,
  },
  {
    field: 'price',
    label: 'price',
    width: 130,
  },
  {
    field: 'irr',
    label: 'irr',
    width: 130,
  },
  {
    field: 'profit',
    label: 'profit',
    width: 130,
  },
  {
    field: 'report',
    label: 'report',
    width: 130,
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
    props.getLocations();
    props.getTypes();
    props.getTypologies();
    props.getStatus();
    props.getConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
    console.log('props investmnet', props);
  }, []);

  const validationSchema = yup.object().shape({
    location: yup
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
    bidAsk: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    financingRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    entryFee: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    stampDuty: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    landRegistryWithMortgage: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    landRegistryWithoutMortgage: yup
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
    stampDutyMortgage: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    stampDutyInterests: yup
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
    exitBrokerFee: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    loanEarlyRepaymentFee: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    capitalGainsTaxBase: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    grossAreaToUsefulArea: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    floor: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    cap: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    mop: yup
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
                error={props.errors.location}
              >
                <AutoComplete
                  value={props.inputs.location}
                  onChange={(event, newValue) => {
                    props.setLocation(newValue);
                    props.setInputError('location', '');
                    props.setAnalyzeButtonDisabled(false);
                  }}
                  error={props.errors.location}
                  name="location"
                  defaultValue={props.inputs.location}
                  options={props.locations}
                  label={props.intl.formatMessage({ ...messages.location })}
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
                <FormHelperText>{props.errors.location}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.type}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.type,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.type}
                  name="type"
                  onChange={handleChange}
                >
                  {props.types.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{props.errors.type}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.typology}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.typology,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.typology}
                  name="typology"
                  onChange={handleChange}
                >
                  {props.typologies.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{props.errors.typology}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.status}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.status,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.status}
                  name="status"
                  onChange={handleChange}
                >
                  {props.status.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{props.errors.status}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={props.errors.condition}
              >
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.condition,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.condition}
                  name="condition"
                  onChange={handleChange}
                >
                  {props.conditions.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{props.errors.condition}</FormHelperText>
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
            error={props.errors.bidAsk}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.bidAsk,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.bidAskInfo,
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
              defaultValue={props.inputs.bidAsk}
              name="bidAsk"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.bidAsk}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.housePriceIndex}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.housePriceIndex,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.housePriceIndexInfo,
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
                defaultValue={props.inputs.housePriceIndex}
                name="housePriceIndex"
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
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue={props.inputs.acquisitionType}
                name="acquisitionType"
                onChange={handleChange}
              >
                {props.acquisitionTypes.map(index => (
                  <MenuItem key={index} value={index}>
                    {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.entryFee}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.entryFee,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.entryFeeInfo,
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
                defaultValue={props.inputs.entryFee}
                name="entryFee"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.entryFee}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.stampDuty}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.stampDuty,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.stampDutyInfo,
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
                defaultValue={props.inputs.stampDuty}
                name="stampDuty"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.stampDuty}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={4}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.landRegistryWithMortgage}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.landRegistryWithMortgage,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryWithMortgageInfo,
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
                defaultValue={props.inputs.landRegistryWithMortgage}
                name="landRegistryWithMortgage"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.landRegistryWithMortgage}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.landRegistryWithoutMortgage}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.landRegistryWithoutMortgage,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryWithoutMortgageInfo,
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
                defaultValue={props.inputs.landRegistryWithoutMortgage}
                name="landRegistryWithoutMortgage"
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.landRegistryWithoutMortgage}
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
              error={props.errors.stampDutyMortgage}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.stampDutyMortgage,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.stampDutyMortgageInfo,
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
                defaultValue={props.inputs.stampDutyMortgage}
                name="stampDutyMortgage"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.stampDutyMortgage}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.stampDutyInterests}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.stampDutyInterests,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.stampDutyInterestsInfo,
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
                defaultValue={props.inputs.stampDutyInterests}
                name="stampDutyInterests"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.stampDutyInterests}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.capexFinancing}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.capexFinancing,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capexFinancing,
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
                defaultValue={props.inputs.capexFinancing}
                name="capexFinancing"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.capexFinancing}</FormHelperText>
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
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.capex}</FormHelperText>
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
              error={props.errors.loanEarlyRepaymentFee}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.loanEarlyRepaymentFee,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.loanEarlyRepaymentFeeInfo,
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
                defaultValue={props.inputs.loanEarlyRepaymentFee}
                name="loanEarlyRepaymentFee"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.loanEarlyRepaymentFee}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.exitBrokerFee}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.exitBrokerFee,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.exitBrokerFeeInfo,
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
                defaultValue={props.inputs.exitBrokerFee}
                name="exitBrokerFee"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.exitBrokerFee}</FormHelperText>
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
              error={props.errors.capitalGainsTaxBase}
            >
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.capitalGainsTaxBase,
                })}
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capitalGainsTaxBaseInfo,
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
                defaultValue={props.inputs.capitalGainsTaxBase}
                name="capitalGainsTaxBase"
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {props.errors.capitalGainsTaxBase}
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
        error={props.errors.grossAreaToUsefulArea}
      >
        <Grid item xs={3}>
          <FormControl variant="standard" className="w-100">
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.grossAreaToUsefulArea,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.grossAreaToUsefulAreaInfo,
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
              defaultValue={props.inputs.grossAreaToUsefulArea}
              name="grossAreaToUsefulArea"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>
              {props.errors.grossAreaToUsefulArea}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.floor}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.floor,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.floorInfo,
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
              defaultValue={props.inputs.floor}
              name="floor"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.floor}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={props.errors.cap}
          >
            <InputLabel>
              {props.intl.formatMessage({
                ...messages.cap,
              })}
              <Tooltip
                title={props.intl.formatMessage({
                  ...messages.capInfo,
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
              defaultValue={props.inputs.cap}
              name="cap"
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{props.errors.cap}</FormHelperText>
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
                {props.ciPercentiles.map(index => (
                  <MenuItem key={index} value={index}>
                    {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={props.errors.mop}
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
                defaultValue={props.inputs.mop}
                name="mop"
                startAdornment={
                  <InputAdornment position="start">#</InputAdornment>
                }
              />
              <FormHelperText>{props.errors.mop}</FormHelperText>
            </FormControl>
          </Grid>
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
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
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
  locations: makeSelectLocations(),
  types: makeSelectTypes(),
  typologies: makeSelectTypologies(),
  conditions: makeSelectConditions(),
  acquisitionTypes: makeSelectAcquisitionTypes(),
  status: makeSelectStatus(),
  ciPercentiles: makeSelectCIPs(),
  analysisData: makeSelectAnalysisData(),
  isGettingAnalysisData: makeSelectIsGettingAnalysisData(),
  analyzeButtonDisabled: makeSelectAnalyzeButtonDisabled(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLocations: () => dispatch(getLocations()),
    getTypes: () => dispatch(getTypes()),
    getTypologies: () => dispatch(getTypologies()),
    getConditions: () => dispatch(getConditions()),
    getStatus: () => dispatch(getStatus()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getCIPs: () => dispatch(getCIPs()),
    getAnalysisData: inputs => dispatch(getAnalysisData(inputs)),
    setLocation: location => dispatch(setLocation(location)),
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
