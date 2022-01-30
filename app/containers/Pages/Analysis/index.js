import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from 'react-loading-skeleton';
import messages from './messages';
import {
  makeSelectAnalysis,
  makeSelectSkelton,
  makeSelectColumns,
  makeSelectRows,
  makeSelectCriteria,
} from './selectors';
import reducer from './reducer';
import { getAnalysisDataById } from './actions';
import 'react-loading-skeleton/dist/skeleton.css';

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
  accordion: {
    width: '100%',
    marginTop: '32px',
  },
  tableLable: {
    fontWeight: 'bold',
  },
}));

export function Analysis(props) {
  // debugger
  const classes = useStyles();
  useInjectReducer({ key: 'analysis', reducer });
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split('/').pop();
    props.getAnalysisDataById(id);
  }, []);

  function displayProperty() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.property,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.location} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.locationInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.location}
                name="location"
                readOnly
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.GCA} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.gcaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.gca}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">m²</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.GPA} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.gpaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.gpa}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">m²</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.bedrooms} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.bedroomsInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.bedrooms}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">#</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function displayInvestmentKpi() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.investmentKpi,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.askingPrice} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.askingPriceInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.askingPrice}
                name="askingPrice"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.proposedEntryPrice} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.proposedEntryPriceInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.propsedEntryPrice}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.estimatedExitPrice} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.estimatedExitPriceInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.estimatedExitPrice}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.timeForSale} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.timeForSaleInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.timeForSale}
                name="location"
                readOnly
                startAdornment={
                  <InputAdornment position="start">MM</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function displayCapital() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.capital,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.requiredEntryCapital} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.requiredEntryCapitalInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.requiredEntryCapital}
                name="requiredEntryCapital"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.requiredCapitalInvestment} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.requiredCapitalInvestmentInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.requiredCapitalOverInvestPeriod}
                name="propsedEntryPrice"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.totalRequierd} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.totalRequierdInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.totalRequiredCapital}
                name="totalRequiredCapital"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function displayReturns() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item xs={12} p={0} m={0}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.returns,
            })}
          </Typography>
        </Grid>

        <Grid item container spacing={6} className="mb-10">
          <Grid item container spacing={6}>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.moic} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.moicInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.moic}
                  name="moic"
                  readOnly
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.requiredInitialInvestment} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.requiredInitialInvestmentInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.requiredInitialInvestment}
                  name="requiredInitialInvestment"
                  readOnly
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.profit} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.profitInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.profit}
                  name="profit"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">&#8364;</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="standard" className="w-100">
                <InputLabel>
                  <FormattedMessage {...messages.irr} />
                  <Tooltip
                    title={props.intl.formatMessage({
                      ...messages.irrInfo,
                    })}
                  >
                    <IconButton className={classes.iconMr}>
                      <InfoIcon className={classes.iconSize} color="primary" />
                    </IconButton>
                  </Tooltip>
                </InputLabel>
                <Input
                  type="number"
                  defaultValue={props.analysis.irr}
                  name="irr"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function displayTable1() {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.columns.map((item, index) => (
                <TableCell
                  align={`${index === 0 ? 'left' : 'center'}`}
                  key={index}
                  className={classes.tableLable}
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map(row => (
              <TableRow key={row.name}>
                <TableCell
                  align="left"
                  component="th"
                  scope="row"
                  className={`${row.bold ? classes.tableLable : ''}`}
                >
                  {row.label}
                </TableCell>
                <TableCell align="center">{row.total}</TableCell>
                <TableCell align="center">{row.year1}</TableCell>
                <TableCell align="center">{row.year2}</TableCell>
                <TableCell align="center">{row.year3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function locationAccordion() {
    return <h1>Location Accordion</h1>;
  }
  function financingAssumptionsAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.financingRate} />
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
                defaultValue={props.criteria.financingRate}
                name="financingRate"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.capexFinanced} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capexFinancedInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.capexFinanced}
                name="capexFinanced"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.interestRate} />
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
                defaultValue={props.criteria.interestRate}
                name="interestRate"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.amortization} />
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
                defaultValue={props.criteria.amortization}
                name="amortization"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.bankCommission} />
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
                defaultValue={props.criteria.bankCommission}
                name="bankCommission"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.earlyRepaymentFee} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.earlyRepaymentFeeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.earlyRepaymentFee}
                name="earlyRepaymentFee"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function areaAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.gca} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.areaGcaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.GCA}
                name="GCA"
                readOnly
                startAdornment={
                  <InputAdornment position="start">㎡</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.areaGPA} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.areaGPAInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.GPA}
                name="areaGPA"
                readOnly
                startAdornment={
                  <InputAdornment position="start">㎡</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function operationAssumptionsAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.capex} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capexInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.Capex}
                name="Capex"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.condominiumCosts} />
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
                defaultValue={props.criteria.condominiumCosts}
                name="areaGPA"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.propertyTaxRate} />
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
                defaultValue={props.criteria.propertyTaxRate}
                name="areaGPA"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function acquistionAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.bidAsk} />
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
                defaultValue={props.criteria.bidAsk}
                name="bidAsk"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.entryBrokerFee} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.entryBrokerFeeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.entrBrokerFee}
                name="entryBrokerFee"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function taxesAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.transferTax} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.transferTaxInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.transferTax}
                name="transferTax"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.acquisitionStampDuty} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.acquisitionStampDutyInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.acquisitionStampDuty}
                name="areaGPA"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.mortgageStampDuty} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.mortgageStampDutyInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.mortgageStampDuty}
                name="mortgageStampDuty"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.interestStampDuty} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.interestStampDutyInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.interestStampDuty}
                name="interestStampDuty"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.landRegistryWithMortgage} />
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
                defaultValue={props.criteria.landRegistryWithMortgage}
                name="landRegistryWithMortgage"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.landRegistryWithoutMortgage} />
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
                defaultValue={props.criteria.landRegistryWithoutMortgage}
                name="landRegistryWithoutMortgage"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.irs} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.irsInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.IRS}
                name="IRS"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.capitalGainsTaxBase} />
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
                defaultValue={props.criteria.capitalGainsTaxBase}
                name="capitalGainsTaxBase"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function exitValueCalculationAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.type} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.typeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.type}
                name="type"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.condition} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.conditionInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.condition}
                name="condition"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.percentile} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.percentileInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.percentile}
                name="percentile"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.cap} />
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
                defaultValue={props.criteria.cap}
                name="cap"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.floor} />
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
                defaultValue={props.criteria.floor}
                name="floor"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.hpi} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.hpiInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.hpi}
                name="hpi"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.timeToSale} />
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
                defaultValue={props.criteria.timeToSell}
                name="timeToSale"
                readOnly
                startAdornment={
                  <InputAdornment position="start">months</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.exitValueOverride} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.exitValueOverrideInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.exitValueOverride}
                name="exitValueOverride"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.exitBrokerFee} />
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
                defaultValue={props.criteria.exitBrokerFee}
                name="exitBrokerFee"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
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
                  ...messages.location,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{locationAccordion()}</AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.financingAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {financingAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.area,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{areaAccordion()}</AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.acquistion,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{acquistionAccordion()}</AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.operationAssumptions,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {operationAssumptionsAccordion()}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.taxes,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{taxesAccordion()}</AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.exitValueCalculation,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{exitValueCalculationAccordion()}</AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Analysis</title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      {!props.isGettingAnalysisById ? (
        [
          displayProperty(),
          displayInvestmentKpi(),
          displayCapital(),
          displayReturns(),
          displayTable1(),
          renderAccordionGroup(),
        ]
      ) : (
        <Skeleton count={4} height={100} />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
  isGettingAnalysisById: makeSelectSkelton(),
  columns: makeSelectColumns(),
  rows: makeSelectRows(),
  criteria: makeSelectCriteria(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAnalysisDataById: id => dispatch(getAnalysisDataById(id)),
    // setShowSkelton: defaultValue => dispatch(setShowSkelton(defaultValue)),
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
