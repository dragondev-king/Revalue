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
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
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
    minAskingPrice: yup.number().required(),
    maxAskingPrice: yup.number().required(),
    minUsefulArea: yup.number().required(),
    maxUsefulArea: yup.number().required(),
    minCapital: yup.number().required(),
    maxCapital: yup.number().required(),
    bidAsk: yup.number().required(),
    financingRate: yup.number().required(),
    entryFee: yup.number().required(),
    stampDuty: yup.number().required(),
    landRegistryWithMortgage: yup.number().required(),
    landRegistryWithoutMortgage: yup.number().required(),
    interestRate: yup.number().required(),
    bankCommission: yup.number().required(),
    amortization: yup.number().required(),
    stampDutyMortgage: yup.number().required(),
    stampDutyInterests: yup.number().required(),
    condominiumCosts: yup.number().required(),
    propertyTaxRate: yup.number().required(),
    timeToSale: yup.number().required(),
    irsRate: yup.number().required(),
    exitBrokerFee: yup.number().required(),
    loanEarlyRepaymentFee: yup.number().required(),
    capitalGainsTaxBase: yup.number().required(),
    GCPA: yup.number().required(),
    floor: yup.number().required(),
    cap: yup.number().required(),
    mop: yup.number().required(),
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
  const errorMsg = props.intl.formatMessage({
    ...messages.errors,
  });

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
              <FormControl
                variant="standard"
                className="w-100"
                error={errors.minAskingPrice}
              >
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
                <FormHelperText>
                  {errors.minAskingPrice ? errorMsg : ''}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={errors.maxAskingPrice}
              >
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
                <FormHelperText>
                  {errors.maxAskingPrice ? errorMsg : ''}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={errors.minUsefulArea}
              >
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
                <FormHelperText>
                  {errors.minUsefulArea ? errorMsg : ''}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="standard"
                className="w-100"
                error={errors.maxUsefulArea}
              >
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
                <FormHelperText>
                  {errors.maxUsefulArea ? errorMsg : ''}
                </FormHelperText>
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
            error={errors.minCapital}
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
              type="number"
              defaultValue={props.inputs.minCapital}
              {...register('minCapital')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
            <FormHelperText>{errors.minCapital ? errorMsg : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={errors.maxCapital}
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
              type="number"
              defaultValue={props.inputs.maxCapital}
              {...register('maxCapital')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
            <FormHelperText>{errors.maxCapital ? errorMsg : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item container spacing={6}>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.bidAsk}
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
                type="number"
                defaultValue={props.inputs.bidAsk}
                {...register('bidAsk')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{errors.bidAsk ? errorMsg : ''}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.financingRate}
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
                type="number"
                defaultValue={props.inputs.financingRate}
                {...register('financingRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.financingRate ? errorMsg : ''}
              </FormHelperText>
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
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.entryFee}
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
                type="number"
                defaultValue={props.inputs.entryFee}
                {...register('entryFee')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{errors.entryFee ? errorMsg : ''}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.stampDuty}
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
                type="number"
                defaultValue={props.inputs.stampDuty}
                {...register('stampDuty')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.stampDuty ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.landRegistryWithMortgage}
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
                type="number"
                defaultValue={props.inputs.landRegistryWithMortgage}
                {...register('landRegistryWithMortgage')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.landRegistryWithMortgage ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.landRegistryWithoutMortgage}
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
                type="number"
                defaultValue={props.inputs.landRegistryWithoutMortgage}
                {...register('landRegistryWithoutMortgage')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.landRegistryWithoutMortgage ? errorMsg : ''}
              </FormHelperText>
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
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.interestRate}
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
                type="number"
                defaultValue={props.inputs.interestRate}
                {...register('interestRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.interestRate ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.bankCommission}
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
                type="number"
                defaultValue={props.inputs.bankCommission}
                {...register('bankCommission')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.bankCommission ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.amortization}
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
                type="number"
                defaultValue={props.inputs.amortization}
                {...register('amortization')}
                startAdornment={
                  <InputAdornment position="start">Years</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.amortization ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.stampDutyMortgage}
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
                type="number"
                defaultValue={props.inputs.stampDutyMortgage}
                {...register('stampDutyMortgage')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.stampDutyMortgage ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.stampDutyInterests}
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
                type="number"
                defaultValue={props.inputs.stampDutyInterests}
                {...register('stampDutyInterests')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.stampDutyInterests ? errorMsg : ''}
              </FormHelperText>
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
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.condominiumCosts}
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
                type="number"
                defaultValue={props.inputs.condominiumCosts}
                {...register('condominiumCosts')}
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.condominiumCosts ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.propertyTaxRate}
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
                type="number"
                defaultValue={props.inputs.propertyTaxRate}
                {...register('propertyTaxRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.propertyTaxRate ? errorMsg : ''}
              </FormHelperText>
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
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.timeToSale}
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
                type="number"
                defaultValue={props.inputs.timeToSale}
                {...register('timeToSale')}
                startAdornment={
                  <InputAdornment position="start">Month</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.timeToSale ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.loanEarlyRepaymentFee}
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
                type="number"
                defaultValue={props.inputs.loanEarlyRepaymentFee}
                {...register('loanEarlyRepaymentFee')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.loanEarlyRepaymentFee ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.exitBrokerFee}
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
                type="number"
                defaultValue={props.inputs.exitBrokerFee}
                {...register('exitBrokerFee')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.exitBrokerFee ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.irsRate}
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
                type="number"
                defaultValue={props.inputs.irsRate}
                {...register('irsRate')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>{errors.irsRate ? errorMsg : ''}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.capitalGainsTaxBase}
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
                type="number"
                defaultValue={props.inputs.capitalGainsTaxBase}
                {...register('capitalGainsTaxBase')}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
              <FormHelperText>
                {errors.capitalGainsTaxBase ? errorMsg : ''}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderValuationModelConfigurationAccordion() {
    return (
      <Grid item container spacing={6} className="mb-10" error={errors.GCPA}>
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
            <FormHelperText>{errors.GCPA ? errorMsg : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            variant="standard"
            className="w-100"
            error={errors.floor}
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
              type="number"
              defaultValue={props.inputs.floor}
              {...register('floor')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
            <FormHelperText>{errors.floor ? errorMsg : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" className="w-100" error={errors.cap}>
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
            <FormHelperText>{errors.cap ? errorMsg : ''}</FormHelperText>
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
            <FormControl
              variant="standard"
              className="w-100"
              error={errors.mop}
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
                type="number"
                defaultValue={props.inputs.mop}
                {...register('mop')}
                startAdornment={
                  <InputAdornment position="start">#</InputAdornment>
                }
              />
              <FormHelperText>{errors.mop ? errorMsg : ''}</FormHelperText>
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
