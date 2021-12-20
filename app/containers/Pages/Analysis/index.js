import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';

import { injectIntl } from 'react-intl';
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
} from './selectors';
import reducer from './reducer';
import {
  getLocations,
  setLocation,
  getTypes,
  setType,
  getTypologyies,
  setTypology,
  getConditions,
  setCondition,
  setMinPrice,
  setMaxPrice,
  setMinArea,
  setMaxArea,
  setMinCapital,
  setMaxCapital,
  setBidAsk,
  setFinancingRate,
  setGCPA,
  setFloor,
  setCap,
  getCIPs,
  setCIP,
  setMOP,
  getAcquisitionTypes,
  setAcquisitionType,
  setEntryFee,
  setStampDuty,
  setLRwithM,
  setLRwithoutM,
  setInterestRate,
  setBankCommission,
  setAmortization,
  setStampDutyMortgage,
  setStampDutyInterests,
  setCondominiumCosts,
  setPropertyTaxRate,
  setTimetoSale,
  setIRSRate,
  setExitBrokerFee,
  setLoanEarlyRepaymentFee,
  setCapitalgainsTaxBase,
  setValue,
} from './actions';
// import messages from './messages';

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
    marginRight: '10px',
  },
}));

function createData(
  location,
  asking,
  capital,
  costs,
  price,
  irr,
  profit,
  report,
) {
  return { location, asking, capital, costs, price, irr, profit, report };
}

const rows = [
  createData('', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', '', ''),
];

export function Analysis(props) {
  console.log(props);
  useInjectReducer({ key: 'analysis', reducer });

  useEffect(() => {
    props.getLocations();
    props.getTypes();
    props.getTypologyies();
    props.getConditions();
    props.getCIPs();
    props.getAcquisitionTypes();
  }, []);

  const classes = useStyles();

  function handleChange(event) {
    props.setValue(event.target);
  }

  function renderPropertyForm() {
    return (
      <>
        <Grid>
          <FormControl variant="standard" className={classes.doubleWidth}>
            <InputLabel id="demo-simple-select-standard-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.inputs.location}
              name="location"
              onChange={event => handleChange(event)}
              endAdornment={
                <InputAdornment position="end">
                  <Tooltip title="Location">
                    <IconButton className={classes.iconmr}>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
            >
              {props.locations.map(index => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlWidth}>
            <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.type}
              onChange={event => {
                props.setType(event.target.value);
              }}
            >
              {props.types.map(index => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlWidth}>
            <InputLabel id="demo-simple-select-standard-label">
              Typology
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.typology}
              onChange={event => {
                props.setTypology(event.target.value);
              }}
            >
              {props.typologies.map(index => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlEndWidth}>
            <InputLabel id="demo-simple-select-standard-label">
              Condition
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.condition}
              onChange={event => {
                props.setCondition(event.target.value);
              }}
            >
              {props.conditions.map(index => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Min Price
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.minprice}
              onChange={event => {
                props.setMinPrice(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Max Price
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.maxprice}
              onChange={event => {
                props.setMaxPrice(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Min Area
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.minarea}
              onChange={event => {
                props.setMinArea(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">m2</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Max Area
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.maxarea}
              onChange={event => {
                props.setMaxArea(event.target.value);
              }}
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
          <InputLabel htmlFor="standard-adornment-amount">
            Min Capital
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.mincapital}
            onChange={event => {
              props.setMinCapital(event.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">&#8364;</InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" className={classes.inputWidth}>
          <InputLabel htmlFor="standard-adornment-amount">
            Max Capital
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.maxcapital}
            onChange={event => {
              props.setMaxCapital(event.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">&#8364;</InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" className={classes.inputWidth}>
          <InputLabel htmlFor="standard-adornment-amount">Bid Ask</InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.bidask}
            onChange={event => {
              props.setBidAsk(event.target.value);
            }}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </FormControl>
        <FormControl variant="standard" className={classes.inputEndWidth}>
          <InputLabel htmlFor="standard-adornment-amount">
            Financing Rate
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            defaultValue={props.financingrate}
            onChange={event => {
              props.setFinancingRate(event.target.value);
            }}
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
            <InputLabel id="demo-simple-select-standard-label">
              Acquisition Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.acquisitiontype}
              onChange={event => {
                props.setAcquisitionType(event.target.value);
              }}
            >
              {props.acquisitiontypes.map(index => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Entry Fee
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.entryfee}
              onChange={event => {
                props.setEntryFee(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Stamp Duty
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.stampduty}
              onChange={event => {
                props.setStampDuty(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Land Registry with Mortgage
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.lrwithm}
              onChange={event => {
                props.setLRwithM(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Land Registry without Mortgage
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.lrwithoutm}
              onChange={event => {
                props.setLRwithoutM(event.target.value);
              }}
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
            <InputLabel htmlFor="standard-adornment-amount">
              Interest Rate
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.interestrate}
              onChange={event => {
                props.setInterestRate(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Bank Commission
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.bankcommission}
              onChange={event => {
                props.setBankCommission(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Amortization
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.amortization}
              onChange={event => {
                props.setAmortization(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">Years</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Stamp Duty Mortgage
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.stampdutymortgage}
              onChange={event => {
                props.setStampDutyMortgage(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Stamp Duty Interests
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.stampdutyinterests}
              onChange={event => {
                props.setStampDutyInterests(event.target.value);
              }}
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
            <InputLabel htmlFor="standard-adornment-amount">
              Condominium Costs
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.condominiumcosts}
              onChange={event => {
                props.setCondominiumCosts(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">&#8364;</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Property Tax Rate
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.propertytaxrate}
              onChange={event => {
                props.setPropertyTaxRate(event.target.value);
              }}
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
            <InputLabel htmlFor="standard-adornment-amount">
              Time to Sale
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.timetosale}
              onChange={event => {
                props.setTimetoSale(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">Month</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              IRS Rate
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.irsrate}
              onChange={event => {
                props.setIRSRate(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Exit Broker Fee
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.exitbrokerfee}
              onChange={event => {
                props.setExitBrokerFee(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.inputLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Loan Early Repayment Fee
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.loanearlyrepaymentfee}
              onChange={event => {
                props.setLoanEarlyRepaymentFee(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Capital gains Tax Base
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.capitalgainstaxbase}
              onChange={event => {
                props.setCapitalgainsTaxBase(event.target.value);
              }}
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
            <InputLabel htmlFor="standard-adornment-amount">
              Gross Construction to Private Area
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.gcpa}
              onChange={event => {
                props.setGCPA(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">Floor</InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.floor}
              onChange={event => {
                props.setFloor(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" className={classes.inputWidth}>
            <InputLabel htmlFor="standard-adornment-amount">Cap</InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.cap}
              onChange={event => {
                props.setCap(event.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">%</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid className={classes.rowSpacing}>
          <FormControl variant="standard" className={classes.doubleWidth}>
            <InputLabel id="demo-simple-select-standard-label">
              Confidencial Imobiliario Percentile
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.cip}
              onChange={event => {
                props.setCIP(event.target.value);
              }}
            >
              {props.cips.map(index => (
                <MenuItem value={index}>{index}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.inputEndLgWidth}>
            <InputLabel htmlFor="standard-adornment-amount">
              Min Observations for Percentile
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              defaultValue={props.mop}
              onChange={event => {
                props.setMOP(event.target.value);
              }}
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
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHead} align="center">
                  Location
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Asking
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Entry Capital
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Operating Costs
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Exit Price
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  IRR
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Profit
                </TableCell>
                <TableCell className={classes.tableHead} align="center">
                  Report
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className={classes.tableBody}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.location}
                  </TableCell>
                  <TableCell align="center">{row.asking}</TableCell>
                  <TableCell align="center">{row.capital}</TableCell>
                  <TableCell align="center">{row.costs}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.irr}</TableCell>
                  <TableCell align="center">{row.profit}</TableCell>
                  <TableCell align="center">{row.report}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
          >
            Analyze
          </Button>
        </Grid>
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
  locations: makeSelectLocations(),
  inputs: makeSelectInputs(),
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
});

function mapDispatchToProps(dispatch) {
  return {
    setValue: value => dispatch(setValue(value)),
    getLocations: () => dispatch(getLocations()),
    setLocation: location => dispatch(setLocation(location)),
    getTypes: () => dispatch(getTypes()),
    setType: type => dispatch(setType(type)),
    getTypologyies: () => dispatch(getTypologyies()),
    setTypology: typology => dispatch(setTypology(typology)),
    getConditions: () => dispatch(getConditions()),
    setCondition: condition => dispatch(setCondition(condition)),
    setMinPrice: minprice => dispatch(setMinPrice(minprice)),
    setMaxPrice: maxprice => dispatch(setMaxPrice(maxprice)),
    setMinArea: minarea => dispatch(setMinArea(minarea)),
    setMaxArea: maxarea => dispatch(setMaxArea(maxarea)),
    setMinCapital: mincapital => dispatch(setMinCapital(mincapital)),
    setMaxCapital: maxcapital => dispatch(setMaxCapital(maxcapital)),
    setBidAsk: bidask => dispatch(setBidAsk(bidask)),
    setFinancingRate: financingrate =>
      dispatch(setFinancingRate(financingrate)),
    setGCPA: gcpa => dispatch(setGCPA(gcpa)),
    setFloor: floor => dispatch(setFloor(floor)),
    setCap: cap => dispatch(setCap(cap)),
    getCIPs: () => dispatch(getCIPs()),
    setCIP: cip => dispatch(setCIP(cip)),
    setMOP: mop => dispatch(setMOP(mop)),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    setAcquisitionType: acquisitiontype =>
      dispatch(setAcquisitionType(acquisitiontype)),
    setEntryFee: entryfee => dispatch(setEntryFee(entryfee)),
    setStampDuty: stampduty => dispatch(setStampDuty(stampduty)),
    setLRwithM: lrwithm => dispatch(setLRwithM(lrwithm)),
    setLRwithoutM: lrwithoutm => dispatch(setLRwithoutM(lrwithoutm)),
    setInterestRate: interestrate => dispatch(setInterestRate(interestrate)),
    setBankCommission: bankcommission =>
      dispatch(setBankCommission(bankcommission)),
    setAmortization: amortization => dispatch(setAmortization(amortization)),
    setStampDutyMortgage: stampdutymortgage =>
      dispatch(setStampDutyMortgage(stampdutymortgage)),
    setStampDutyInterests: stampdutyinterests =>
      dispatch(setStampDutyInterests(stampdutyinterests)),
    setCondominiumCosts: condominiumcosts =>
      dispatch(setCondominiumCosts(condominiumcosts)),
    setPropertyTaxRate: propertytaxrate =>
      dispatch(setPropertyTaxRate(propertytaxrate)),
    setTimetoSale: timetosale => dispatch(setTimetoSale(timetosale)),
    setIRSRate: irsrate => dispatch(setIRSRate(irsrate)),
    setExitBrokerFee: exitbrokerfee =>
      dispatch(setExitBrokerFee(exitbrokerfee)),
    setLoanEarlyRepaymentFee: loanearlyrepaymentfee =>
      dispatch(setLoanEarlyRepaymentFee(loanearlyrepaymentfee)),
    setCapitalgainsTaxBase: capitalgainstaxbase =>
      dispatch(setCapitalgainsTaxBase(capitalgainstaxbase)),
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
