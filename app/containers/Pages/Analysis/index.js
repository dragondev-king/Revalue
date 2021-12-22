import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
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

import messages from './messages';
import PaperMap from '../../../components/PaperMap';
import {
  makeSelectAnalysis,
  makeSelectLocations,
  makeSelectLocation,
  makeSelectTypes,
  makeSelectType,
  makeSelectTypologies,
  makeSelectTypology,
  makeSelectConditions,
  makeSelectCondition,
  makeSelectMinPrice,
  makeSelectMaxPrice,
  makeSelectMinArea,
  makeSelectMaxArea,
  makeSelectMinCapital,
  makeSelectMaxCapital,
  makeSelectBidAsk,
  makeSelectFinancingRate,
  makeSelectGCPA,
  makeSelectFloor,
  makeSelectCap,
  makeSelectCIPs,
  makeSelectCIP,
  makeSelectMOP,
  makeSelectAcquisitionTypes,
  makeSelectAcquisitionType,
  makeSelectEntryFee,
  makeSelectStampDuty,
  makeSelectLRwithM,
  makeSelectLRwithoutM,
  makeSelectInterestRate,
  makeSelectBankCommission,
  makeSelectAmortization,
  makeSelectStampDutyMortgage,
  makeSelectStampDutyInterests,
  makeSelectCondominiumCosts,
  makeSelectPropertyTaxRate,
  makeSelectTimetoSale,
  makeSelectIRSRate,
  makeSelectExitBrokerFee,
  makeSelectLoanEarlyRepaymentFee,
  makeSelectCapitalgainsTaxBase,
  makeSelectInputs,
  makeSelectTableData,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import {
  getLocations,
  getTypes,
  getTypologyies,
  getConditions,
  getCIPs,
  getAcquisitionTypes,
  setValue,
  getTableData,
  getLoading,
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
    backgroundColor: '#4472C4',
    marginTop: '48px',
    marginBottom: '48px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#4472C4',
    },
  },
  w100: {
    width: '100%',
  },
  tableHead: {
    backgroundColor: '#4472C4',
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
    maxHeight: '325px',
  },
  iconmr: {
    marginLeft: '10px',
    marginBottom: '5px',
    padding: '0px',
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
}));
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
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
// eslint-disable-next-line prefer-const
let rows = [];

export function Analysis(props) {
  useInjectReducer({ key: 'analysis', reducer });
  const { register, handleSubmit } = useForm();
  const [btnState, setBtnState] = useState(false);
  const onSubmit = data => {
    props.setValue(data);
    props.getTableData(false);
    rows = [...props.tableData];
    setBtnState(true);
  };
  const classes = useStyles();
  const handleChange = () => {
    console.log('Hello');
    setBtnState(false);
  };

  useEffect(() => {
    props.getLocations();
    props.getTypes();
    props.getTypologyies();
    props.getConditions();
    props.getCIPs();
    props.getAcquisitionTypes();
    props.getLoading(false);
  }, []);

  function renderPropertyForm() {
    return (
      <>
        <Grid>
          <FormControl variant="standard" className={classes.doubleWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.location,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={props.inputs.location}
              {...register('location')}
            >
              {props.locations.map(index => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.type,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={props.inputs.type}
              {...register('type')}
            >
              {props.types.map(index => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.typology,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={props.inputs.typology}
              {...register('typology')}
            >
              {props.typologies.map(index => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlEndWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.condition,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={props.inputs.condition}
              {...register('condition')}
            >
              {props.conditions.map(index => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.minPrice,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.minprice}
              {...register('minprice')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.maxPrice,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.maxprice}
              {...register('maxprice')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.minArea,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.minarea}
              {...register('minarea')}
              startAdornment={
                <InputAdornment position="start">m2</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.maxArea,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.maxarea}
              {...register('maxarea')}
              startAdornment={
                <InputAdornment position="start">m2</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </>
    );
  }

  function renderAccordion() {
    return (
      <Grid className={classes.rowSpacing}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Investment Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{renderAcod1()}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Other Investment Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{renderAcod2()}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Valuation Model Configuration</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{renderAcod3()}</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    );
  }

  function renderAcod1() {
    return (
      <Grid>
        <FormControl variant="standard" className={classes.inputWidth}>
          <InputLabel
            id="demo-simple-select-standard-label"
            className={classes.labelWidth}
          >
            {props.intl.formatMessage({
              ...messages.minCapital,
            })}
            <Tooltip title="info">
              <IconButton className={classes.iconmr}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.inputs.mincapital}
            {...register('mincapital')}
            startAdornment={
              <InputAdornment position="start">&#8364;</InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" className={classes.inputWidth}>
          <InputLabel
            htmlFor="standard-adornment-amount"
            className={classes.labelWidth}
          >
            {props.intl.formatMessage({
              ...messages.maxCapital,
            })}
            <Tooltip title="info">
              <IconButton className={classes.iconmr}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.inputs.maxcapital}
            {...register('maxcapital')}
            startAdornment={
              <InputAdornment position="start">&#8364;</InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" className={classes.inputWidth}>
          <InputLabel
            id="demo-simple-select-standard-label"
            className={classes.labelWidth}
          >
            {props.intl.formatMessage({
              ...messages.bidAsk,
            })}
            <Tooltip title="info">
              <IconButton className={classes.iconmr}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.inputs.bidask}
            {...register('bidask')}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </FormControl>
        <FormControl variant="standard" className={classes.inputEndWidth}>
          <InputLabel
            htmlFor="standard-adornment-amount"
            className={classes.labelWidth}
          >
            {props.intl.formatMessage({
              ...messages.financingRate,
            })}
            <Tooltip title="info">
              <IconButton className={classes.iconmr}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.inputs.financingrate}
            {...register('financingrate')}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </FormControl>
      </Grid>
    );
  }

  function renderAcod2() {
    return (
      <Grid>
        {renderAcod21()}
        {renderAcod22()}
        {renderAcod23()}
        {renderAcod24()}
      </Grid>
    );
  }

  function renderAcod21() {
    return (
      <Grid>
        <Grid>
          <h5 className={classes.title}>Acquisition Assumptions</h5>
        </Grid>
        <Grid>
          <FormControl variant="standard" className={classes.doubleWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.acquisitionType,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={props.inputs.acquisitiontype}
              {...register('acquisitiontype')}
            >
              {props.acquisitiontypes.map(index => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.entryFee,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.entryfee}
              {...register('entryfee')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.stampDuty,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.stampduty}
              {...register('stampduty')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.landRegistryWthMortgage,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.lrwithm}
              {...register('lrwithm')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.landRegistryWithoutMortgage,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.lrwithoutm}
              {...register('lrwithoutm')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  function renderAcod22() {
    return (
      <Grid>
        <Grid>
          <h5 className={classes.title}>Finance Assumptions</h5>
        </Grid>
        <Grid>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.interestRate,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.interestrate}
              {...register('interestrate')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.bankCommission,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.bankcommission}
              {...register('bankcommission')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.amortization,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.amortization}
              {...register('amortization')}
              startAdornment={
                <InputAdornment position="start">Years</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.stampDutyMortgage,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.stampdutymortgage}
              {...register('stampdutymortgage')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.stampDutyInterests,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.stampdutyinterests}
              {...register('stampdutyinterests')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  function renderAcod23() {
    return (
      <Grid>
        <Grid>
          <h5 className={classes.title}>Operating Assumptions</h5>
        </Grid>
        <Grid>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.condominiumCosts,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.condominiumcosts}
              {...register('condominiumcosts')}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.propertyTaxRate,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.propertytaxrate}
              {...register('propertytaxrate')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  function renderAcod24() {
    return (
      <Grid>
        <Grid>
          <h5 className={classes.title}>Exit Assumptions</h5>
        </Grid>
        <Grid>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.timeToSale,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.timetosale}
              {...register('timetosale')}
              startAdornment={
                <InputAdornment position="start">Month</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.irsRate,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.irsrate}
              {...register('irsrate')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.exitBrokerFee,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.exitbrokerfee}
              {...register('exitbrokerfee')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.loanEarlyRepaymentFee,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.loanearlyrepaymentfee}
              {...register('loanearlyrepaymentfee')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.capitalGainsTaxBase,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.capitalgainstaxbase}
              {...register('capitalgainstaxbase')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  function renderAcod3() {
    return (
      <Grid>
        <Grid>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.grossConstructionToPrivateAre,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.gcpa}
              {...register('gcpa')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.floor,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.floor}
              {...register('floor')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.cap,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.cap}
              {...register('cap')}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.doubleWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.confidencialImobiliarioPercentile,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={props.inputs.cip}
              {...register('cip')}
            >
              {props.cips.map(index => (
                <MenuItem key={index} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={classes.labelWidth}
            >
              {props.intl.formatMessage({
                ...messages.minObservationsForPercentile,
              })}
              <Tooltip title="info">
                <IconButton className={classes.iconmr}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.inputs.mop}
              {...register('mop')}
              startAdornment={
                <InputAdornment position="start">#</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  function renderTable() {
    return (
      <>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </>
    );
  }

  return (
    <Grid>
      <Helmet>
        <title>Analysis</title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <Grid item container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={handleChange}
          className={classes.w100}
        >
          <Grid key="property-info" item container direction="row">
            <Grid key="form-control" item container xs={8}>
              <h5>Property Information</h5>
              {renderPropertyForm()}
              {renderAccordion()}
            </Grid>
            <Grid
              key="google-map"
              item
              container
              xs={4}
              className={classes.fixHeight}
            >
              <PaperMap />
            </Grid>
          </Grid>
          <Grid key="button" item container direction="row">
            <Button
              type="submit"
              variant="contained"
              className={classes.customizeBtn}
              disabled={btnState}
            >
              {props.loading && (
                <CircularProgress size={20} className={classes.loading} />
              )}
              {!props.loading && 'Analyze'}
            </Button>
          </Grid>
        </form>
        <Grid key="table" item container direction="row">
          <Grid className={classes.w100}>
            <h5>Investments</h5>
            {renderTable()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Analysis.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
  inputs: makeSelectInputs(),
  locations: makeSelectLocations(),
  location: makeSelectLocation(),
  types: makeSelectTypes(),
  type: makeSelectType(),
  typologies: makeSelectTypologies(),
  typology: makeSelectTypology(),
  conditions: makeSelectConditions(),
  condition: makeSelectCondition(),
  minprice: makeSelectMinPrice(),
  maxprice: makeSelectMaxPrice(),
  minarea: makeSelectMinArea(),
  maxarea: makeSelectMaxArea(),
  mincapital: makeSelectMinCapital(),
  maxcapital: makeSelectMaxCapital(),
  bidask: makeSelectBidAsk(),
  financingrate: makeSelectFinancingRate(),
  gcpa: makeSelectGCPA(),
  floor: makeSelectFloor(),
  cap: makeSelectCap(),
  cips: makeSelectCIPs(),
  cip: makeSelectCIP(),
  mop: makeSelectMOP(),
  acquisitiontypes: makeSelectAcquisitionTypes(),
  acquisitiontype: makeSelectAcquisitionType(),
  entryfee: makeSelectEntryFee(),
  stampduty: makeSelectStampDuty(),
  lrwithm: makeSelectLRwithM(),
  lrwithoutm: makeSelectLRwithoutM(),
  interestrate: makeSelectInterestRate(),
  bankcommission: makeSelectBankCommission(),
  amortization: makeSelectAmortization(),
  stampdutymortgage: makeSelectStampDutyMortgage(),
  stampdutyinterests: makeSelectStampDutyInterests(),
  condominiumcosts: makeSelectCondominiumCosts(),
  propertytaxrate: makeSelectPropertyTaxRate(),
  timetosale: makeSelectTimetoSale(),
  irsrate: makeSelectIRSRate(),
  exitbrokerfee: makeSelectExitBrokerFee(),
  loanearlyrepaymentfee: makeSelectLoanEarlyRepaymentFee(),
  capitalgainstaxbase: makeSelectCapitalgainsTaxBase(),
  tableData: makeSelectTableData(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLocations: () => dispatch(getLocations()),
    getTypes: () => dispatch(getTypes()),
    getTypologyies: () => dispatch(getTypologyies()),
    getConditions: () => dispatch(getConditions()),
    getCIPs: () => dispatch(getCIPs()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getTableData: () => dispatch(getTableData()),
    setValue: value => dispatch(setValue(value)),
    getLoading: () => dispatch(getLoading()),
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
