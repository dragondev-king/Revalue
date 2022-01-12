/* eslint-disable react/no-array-index-key */
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import messages from './messages';
import PaperMap from '../../../components/PaperMap';
import {
  makeSelectAnalysis,
  makeSelectLocations,
  makeSelectTypes,
  makeSelectTypologies,
  makeSelectConditions,
  makeSelectCIPs,
  makeSelectInputs,
  makeSelectAnalysisData,
  makeSelectIsGettingAnalysisData,
  makeSelectAcquisitionTypes,
  makeSelectAnalyzeButtonState,
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
  setValue,
  setAnalyzeButtonState,
  getStatus,
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
    headerName: 'Location',
    width: 140,
    editable: true,
  },
  {
    field: 'asking',
    headerName: 'Asking',
    width: 130,
    editable: true,
  },
  {
    field: 'capital',
    headerName: 'Capital',
    width: 130,
    editable: true,
  },
  {
    field: 'costs',
    headerName: 'Costs',
    width: 130,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
    editable: true,
  },
  {
    field: 'irr',
    headerName: 'IRR',
    width: 130,
    editable: true,
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 130,
    editable: true,
  },
  {
    field: 'report',
    headerName: 'Report',
    width: 130,
    editable: true,
  },
];

export function Analysis(props) {
  useInjectReducer({ key: 'analysis', reducer });

  useEffect(() => {
    props.getLocations();
    props.getTypes();
    props.getTypologies();
    props.getStatus();
    props.getConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  const validationSchema = yup.object().shape({
    minAskingPrice: yup.string().required('⚠ Min Asking Price is empty'),
    maxAskingPrice: yup.string().required('⚠ Max Asking Price is empty'),
    minUsefulArea: yup.string().required('⚠ Min Useful Area is empty'),
    maxUsefulArea: yup.string().required('⚠ Max Useful Area is empty'),
    minCapital: yup.string().required('⚠ Min Captial is empty'),
    maxCapital: yup.string().required('⚠ Max Captial is empty'),
    bidAsk: yup.string().required('⚠ Bid Ask is empty'),
    financingRate: yup.string().required('⚠ Financing Rate is empty'),
    entryFee: yup.string().required('⚠ Entry Fee is empty'),
    stampDuty: yup.string().required('⚠ Stamp Duty is empty'),
    LRwithM: yup.string().required('⚠ Land Registry with Mortgage is empty'),
    LRwithoutM: yup
      .string()
      .required('⚠ Land Registry without Mortgage is empty'),
    interestRate: yup.string().required('⚠ Interest Rate is empty'),
    bankCommission: yup.string().required('⚠ Bank Commission is empty'),
    amortization: yup.string().required('⚠ Amortization is empty'),
    stampDutyMortgage: yup.string().required('⚠ Stamp Duty Mortgage is empty'),
    stampDutyInterests: yup
      .string()
      .required('⚠ Stamp Duty Interests is empty'),
    condominiumCosts: yup.string().required('⚠ Condominium Costs is empty'),
    propertyTaxRate: yup.string().required('⚠ Property Tax Rate is empty'),
    timeToSale: yup.string().required('⚠ Time to Sale is empty'),
    IRSrate: yup.string().required('⚠ IRS Rate is empty'),
    exitBrokerFee: yup.string().required('⚠ Exit Broker Fee is empty'),
    loanEarlyRepaymentFee: yup
      .string()
      .required('⚠ Loan Early Repayment Fee is empty'),
    capitalGainsTaxBase: yup
      .string()
      .required('⚠ Capital gains Tax Base is empty'),
    GCPA: yup
      .string()
      .required('⚠ Gross Construction to Private Area is empty'),
    floor: yup.string().required('⚠ Floor is empty'),
    cap: yup.string().required('⚠ Cap is empty'),
    MOP: yup.string().required('⚠ Min Observations for Percentile is empty'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = data => {
    props.setValue(data);
    props.getAnalysisData(data);
    props.setAnalyzeButtonState(true);
  };

  function handleChange() {
    props.setAnalyzeButtonState(false);
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
            <Grid item xs={6}>
              <FormControl variant="standard" className="w-100">
                <AutoComplete
                  {...register('location')}
                  defaultValue={props.inputs.location}
                  onChange={handleChange}
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
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.type,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.type}
                  {...register('type')}
                  onChange={handleChange}
                >
                  {props.types.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.typology,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.typology}
                  {...register('typology')}
                  onChange={handleChange}
                >
                  {props.typologies.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.status,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.status}
                  {...register('status')}
                  onChange={handleChange}
                >
                  {props.status.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.condition,
                  })}
                </InputLabel>
                <Select
                  defaultValue={props.inputs.condition}
                  {...register('condition')}
                  onChange={handleChange}
                >
                  {props.conditions.map(index => (
                    <MenuItem key={index} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.minAskingPrice,
                  })}
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.inputs.minAskingPrice}
                  {...register('minAskingPrice')}
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                />
                {errors.minAskingPrice && (
                  <p className={classes.validation}>
                    {errors.minAskingPrice.message}
                  </p>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.maxAskingPrice,
                  })}
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.inputs.maxAskingPrice}
                  {...register('maxAskingPrice')}
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                />
                {errors.maxAskingPrice && (
                  <p className={classes.validation}>
                    {errors.maxAskingPrice.message}
                  </p>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.minUsefulArea,
                  })}
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.inputs.minUsefulArea}
                  {...register('minUsefulArea')}
                  startAdornment={
                    <InputAdornment position="start">m²</InputAdornment>
                  }
                />
                {errors.minUsefulArea && (
                  <p className={classes.validation}>
                    {errors.minUsefulArea.message}
                  </p>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  {props.intl.formatMessage({
                    ...messages.maxUsefulArea,
                  })}
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.inputs.maxUsefulArea}
                  {...register('maxUsefulArea')}
                  startAdornment={
                    <InputAdornment position="start">m²</InputAdornment>
                  }
                />
                {errors.maxUsefulArea && (
                  <p className={classes.validation}>
                    {errors.maxUsefulArea.message}
                  </p>
                )}
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
          <FormControl variant="standard" className="w-100">
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
              type="number"
              defaultValue={props.inputs.minCapital}
              {...register('minCapital')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
            {errors.minCapital && (
              <p className={classes.validation}>{errors.minCapital.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" className="w-100">
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
              type="number"
              defaultValue={props.inputs.maxCapital}
              {...register('maxCapital')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
            {errors.maxCapital && (
              <p className={classes.validation}>{errors.maxCapital.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.bidAsk}
                {...register('bidAsk')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.bidAsk && (
                <p className={classes.validation}>{errors.bidAsk.message}</p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.financingRate}
                {...register('financingRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.financingRate && (
                <p className={classes.validation}>
                  {errors.financingRate.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderOtherInvestmentInformationAccordion() {
    return (
      <Grid direction="column" justifyContent="flex-start" className="mb-10">
        {renderAcquisitionAssumptions()}
        {renderFinanceAssumptions()}
        {renderOperatingAssumptions()}
        {renderExitAssumptions()}
      </Grid>
    );
  }

  function renderAcquisitionAssumptions() {
    return (
      <Grid container>
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
                {...register('acquisitionType')}
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
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.entryFee}
                {...register('entryFee')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.entryFee && (
                <p className={classes.validation}>{errors.entryFee.message}</p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.stampDuty}
                {...register('stampDuty')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.stampDuty && (
                <p className={classes.validation}>{errors.stampDuty.message}</p>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.landRegistryWithMortgage}
                {...register('landRegistryWithMortgage')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              {errors.LRwithM && (
                <p className={classes.validation}>{errors.LRwithM.message}</p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.landRegistryWithoutMortgage}
                {...register('landRegistryWithoutMortgage')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              {errors.LRwithoutM && (
                <p className={classes.validation}>
                  {errors.LRwithoutM.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderFinanceAssumptions() {
    return (
      <Grid container className="mt-20">
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.financeAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.interestRate}
                {...register('interestRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.interestRate && (
                <p className={classes.validation}>
                  {errors.interestRate.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.bankCommission}
                {...register('bankCommission')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              {errors.bankCommission && (
                <p className={classes.validation}>
                  {errors.bankCommission.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.amortization}
                {...register('amortization')}
                startAdornment={
                  <InputAdornment position="start">Years</InputAdornment>
                }
              />
              {errors.amortization && (
                <p className={classes.validation}>
                  {errors.amortization.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.stampDutyMortgage}
                {...register('stampDutyMortgage')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.stampDutyMortgage && (
                <p className={classes.validation}>
                  {errors.stampDutyMortgage.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.stampDutyInterests}
                {...register('stampDutyInterests')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.stampDutyInterests && (
                <p className={classes.validation}>
                  {errors.stampDutyInterests.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderOperatingAssumptions() {
    return (
      <Grid container className="mt-20">
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.operatingAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.condominiumCosts}
                {...register('condominiumCosts')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              {errors.condominiumCosts && (
                <p className={classes.validation}>
                  {errors.condominiumCosts.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.propertyTaxRate}
                {...register('propertyTaxRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.propertyTaxRate && (
                <p className={classes.validation}>
                  {errors.propertyTaxRate.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderExitAssumptions() {
    return (
      <Grid container className="mt-20">
        <Grid item>
          <Typography className={classes.title}>
            {props.intl.formatMessage({
              ...messages.exitAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.timeToSale}
                {...register('timeToSale')}
                startAdornment={
                  <InputAdornment position="start">Month</InputAdornment>
                }
              />
              {errors.timeToSale && (
                <p className={classes.validation}>
                  {errors.timeToSale.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.loanEarlyRepaymentFee}
                {...register('loanEarlyRepaymentFee')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.loanEarlyRepaymentFee && (
                <p className={classes.validation}>
                  {errors.loanEarlyRepaymentFee.message}
                </p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.exitBrokerFee}
                {...register('exitBrokerFee')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.exitBrokerFee && (
                <p className={classes.validation}>
                  {errors.exitBrokerFee.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.irsRate}
                {...register('irsRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.IRSrate && (
                <p className={classes.validation}>{errors.IRSrate.message}</p>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.capitalGainsTaxBase}
                {...register('capitalGainsTaxBase')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              {errors.capitalGainsTaxBase && (
                <p className={classes.validation}>
                  {errors.capitalGainsTaxBase.message}
                </p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderValuationModelConfigurationAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10">
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
              type="number"
              defaultValue={props.inputs.grossAreaToUsefulArea}
              {...register('grossAreaToUsefulArea')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            {errors.GCPA && (
              <p className={classes.validation}>{errors.GCPA.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" className="w-100">
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
              type="number"
              defaultValue={props.inputs.floor}
              {...register('floor')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            {errors.floor && (
              <p className={classes.validation}>{errors.floor.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" className="w-100">
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
              type="number"
              defaultValue={props.inputs.cap}
              {...register('cap')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            {errors.cap && (
              <p className={classes.validation}>{errors.cap.message}</p>
            )}
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
                defaultValue={props.inputs.cip}
                {...register('cip')}
                onChange={handleChange}
              >
                {props.cips.map(index => (
                  <MenuItem key={index} value={index}>
                    {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
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
                type="number"
                defaultValue={props.inputs.mop}
                {...register('mop')}
                startAdornment={
                  <InputAdornment position="start">#</InputAdornment>
                }
              />
              {errors.MOP && (
                <p className={classes.validation}>{errors.MOP.message}</p>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderTable() {
    return (
      <Grid container direction="column" className="w-100">
        <Grid item className="pb-20">
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.tableTitle,
            })}
          </Typography>
        </Grid>
        <Grid item className="w-100 h-500">
          <DataGrid
            rows={props.analysisData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
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
        className={classes.customizeBtn}
        disabled={props.analyzeButtonState}
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={handleChange}
          className="w-100"
        >
          {renderPropertyInformationAndMap()}
          {renderAccordionGroup()}
          {renderButton()}
        </form>
        {renderTable()}
      </Grid>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
  inputs: makeSelectInputs(),
  locations: makeSelectLocations(),
  types: makeSelectTypes(),
  typologies: makeSelectTypologies(),
  conditions: makeSelectConditions(),
  acquisitionTypes: makeSelectAcquisitionTypes(),
  status: makeSelectStatus(),
  cips: makeSelectCIPs(),
  analysisData: makeSelectAnalysisData(),
  isGettingAnalysisData: makeSelectIsGettingAnalysisData(),
  analyzeButtonState: makeSelectAnalyzeButtonState(),
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
    setValue: value => dispatch(setValue(value)),
    setAnalyzeButtonState: value => dispatch(setAnalyzeButtonState(value)),
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
