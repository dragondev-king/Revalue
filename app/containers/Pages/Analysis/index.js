import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  // FormattedMessage,
  injectIntl,
} from 'react-intl';
import { createStructuredSelector } from 'reselect';
import PaperMap from 'components/PaperMap';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import { useInjectReducer } from 'utils/injectReducer';
// import { FormControl } from '@material-ui/core';
// import Skeleton from 'react-loading-skeleton';
// import BreakdownTable from 'containers/Pages/Analysis/components/BreakdownTable';
// import Criteria from 'containers/Pages/Analysis/components/Criteria';
// import EstimatedProfitTable from 'containers/Pages/Analysis/components/EstimatedProfitTable';
// import ValuationModal from 'containers/Pages/Analysis/components/ValuationModel';
// import messages from './messages';
import PriceStat from 'images/price.png';
import Investment from 'images/investment.png';
import UsefulareaIcon from 'images/usefulAreaIcon.png';
import GrossareaIcon from 'images/grossareaIcon.png';
import Tax from 'images/tax.png';
import IRR from 'images/irr.png';
import SettingIcon from 'images/settingIcon.png';
import SettingDrawer from './components/Drawer';
import Carousel from './components/Carousel';
import {
  investmentKpiRows,
  capitalRows,
  acuisitionRows,
  depRows,
} from './_helper';
import {
  makeSelectAnalysis,
  makeSelectIsGettingAnalysisById,
} from './selectors';
import reducer from './reducer';
import {
  getAnalysisDataById,
  getPropertyLocations,
  getPropertyTypes,
  getPropertyTypologies,
  getPropertyConditions,
  getAcquisitionTypes,
  getCIPs,
} from './actions';
import 'react-loading-skeleton/dist/skeleton.css';
import { useStyles } from './styles';

export function Analysis(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  useInjectReducer({ key: 'analysis', reducer });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    const path = window.location.pathname;
    const id = path.split('/').pop();
    props.getAnalysisDataById(id);
  }, []);

  useEffect(() => {
    props.getPropertyLocations();
    props.getPropertyTypes();
    props.getPropertyTypologies();
    props.getPropertyConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  /*
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.grossArea} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.grossAreaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.property.grossArea}
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.usefulArea} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.usefulAreaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.usefulArea}
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
                <FormattedMessage {...messages.totalRequired} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.totalRequiredInfo,
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
        <Grid item xs={12}>
          <Typography variant="h6">
            {props.intl.formatMessage({
              ...messages.returns,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
              <InputLabel
                classes={{
                  root: classes.label,
                  shrink: classes.labelShrunk,
                }}
              >
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
    );
  }
*/

  function displayOverviewStats() {
    return (
      <Grid container className={classes.overviewStatsGrid}>
        <Grid
          item
          container
          xs={3}
          justifyContent="space-between"
          alignItems="center"
          className={classes.overviewStatsCard}
        >
          <Grid item>
            <Grid item className={classes.overviewStatsTitle}>
              Entry Price
            </Grid>
            <Grid item className={classes.overviewStatsPrice}>
              € 84,000
            </Grid>
          </Grid>
          <Grid item>
            <img src={PriceStat} width={50} alt="price" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={3}
          justifyContent="space-between"
          alignItems="center"
          className={classes.overviewStatsCard}
        >
          <Grid item>
            <Grid item className={classes.overviewStatsTitle}>
              Required Initial Investment
            </Grid>
            <Grid item className={classes.overviewStatsPrice}>
              € 13,000
            </Grid>
          </Grid>
          <Grid item>
            <img src={Investment} width={50} alt="price" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={3}
          justifyContent="space-between"
          alignItems="center"
          className={classes.overviewStatsCard}
        >
          <Grid item>
            <Grid item className={classes.overviewStatsTitle}>
              Profit After Tax
            </Grid>
            <Grid item className={classes.overviewStatsPrice}>
              € 14,200
            </Grid>
          </Grid>
          <Grid item>
            <img src={Tax} width={50} alt="price" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={3}
          justifyContent="space-between"
          alignItems="center"
          className={classes.overviewStatsCard}
        >
          <Grid item>
            <Grid item className={classes.overviewStatsTitle}>
              IRR
            </Grid>
            <Grid item className={classes.overviewStatsPrice}>
              15%
            </Grid>
          </Grid>
          <Grid item>
            <img src={IRR} width={50} alt="price" />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  function renderPropertyInformationAndSlider() {
    return (
      <Grid item container direction="row">
        <Grid item container xs={6} className="pr-40">
          <Box>
            <Box>
              <Typography className={classes.locationLabel}>
                Location
              </Typography>
              <Typography className={classes.sectionTitle}>
                Oeiras, Lisbon, Portugal
              </Typography>
            </Box>
            <Box className={classes.areaWrapper}>
              <Box className={classes.areaItem}>
                <Box className={classes.areaIcon}>
                  <img src={GrossareaIcon} width={40} alt="gross area" />
                </Box>
                <Box className={classes.areaDetail}>
                  <Typography style={{ fontWeight: 'bold' }}>500 M2</Typography>
                  <Typography style={{ fontSize: '14px', color: '#565853' }}>
                    Gross area
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.areaItem}>
                <Box className={classes.areaIcon}>
                  <img src={UsefulareaIcon} width={40} alt="useful area" />
                </Box>
                <Box className={classes.areaDetail}>
                  <Typography style={{ fontWeight: 'bold' }}>280 M2</Typography>
                  <Typography style={{ fontSize: '14px', color: '#565853' }}>
                    Useful area
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.typeWrapper}>
              <Box className={classes.typeItem}>
                Type:{' '}
                <Box className={classes.typeItemColored} component="span">
                  Appartment
                </Box>
              </Box>
              <Box className={classes.typeItem}>
                Condition:{' '}
                <Box className={classes.typeItemColored} component="span">
                  New
                </Box>
              </Box>
              <Box className={classes.typeItem}>
                Typology:{' '}
                <Box className={classes.typeItemColored} component="span">
                  T2
                </Box>
              </Box>
            </Box>
            <Box className={classes.propertyDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.fixHeight}>
          <Carousel />
        </Grid>
      </Grid>
    );
  }

  function renderPropertyInformationAndMap() {
    return (
      <Grid
        item
        container
        direction="row"
        className={classes.propertyInformationAndMapContainer}
      >
        <Grid item xs={6} className="pr-40">
          <PaperMap />
        </Grid>
        <Grid item container xs={6}>
          <Box style={{ width: '100%' }}>
            <Box
              className={classes.sectionTableWrapper}
              style={{ marginBottom: '50px' }}
            >
              <Typography className={classes.sectionTitle}>
                Investment KPI
              </Typography>
              <TableContainer
                component={Paper}
                style={{ marginTop: '16px', padding: '0 14px' }}
              >
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    {investmentKpiRows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box className={classes.sectionTableWrapper}>
              <Typography className={classes.sectionTitle}>Capital</Typography>
              <TableContainer
                component={Paper}
                style={{ marginTop: '16px', padding: '0 14px' }}
              >
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    {capitalRows.map((row, index) => (
                      <TableRow key={row.name}>
                        <TableCell
                          component="th"
                          scope="row"
                          variant="head"
                          style={{
                            fontWeight:
                              index === capitalRows.length - 1
                                ? 'bold'
                                : 'normal',
                            color:
                              index === capitalRows.length - 1
                                ? '#0083FC'
                                : 'black',
                            borderBottom:
                              index === capitalRows.length - 2 &&
                              '1px solid #0083FC',
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          variant="head"
                          style={{
                            fontWeight: 'bold',
                            color:
                              index === capitalRows.length - 1
                                ? '#0083FC'
                                : 'black',
                            borderBottom:
                              index === capitalRows.length - 2 &&
                              '1px solid #0083FC',
                          }}
                        >
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  function renderSensitivityTable() {
    return (
      <Box className={classes.sensitivityTableContainer}>
        <Typography className={classes.sectionTitle}>
          Sensitivity Table
        </Typography>
        <TableContainer
          component={Paper}
          style={{ marginTop: '16px', padding: '16px 16px' }}
        >
          <Table className={classes.table} aria-label="senstivty table">
            <TableHead>
              <TableRow>
                <TableCell
                  rowSpan={2}
                  colSpan={2}
                  style={{
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    verticalAlign: 'initial',
                    fontSize: '16px',
                  }}
                >
                  Estimated Profit
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={5}
                  style={{
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}
                >
                  Acquistion Price
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  100 000
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  125 000
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  150 000
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  175 000
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  200 000
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  rowSpan={5}
                  style={{
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    verticalAlign: 'initial',
                    fontSize: '16px',
                  }}
                >
                  Exit Price
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  270 750
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  123456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  213456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  321456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  432156
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  543216
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  270 750
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  123456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  213456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  321456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  432156
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  543216
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  270 750
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#CDE7FF' }}
                >
                  123456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  213456
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    border: '2px solid white',
                    background: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                  }}
                >
                  321456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  432156
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    border: '2px solid white',
                    background: '#41A4FF',
                    color: 'white',
                  }}
                >
                  543216
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  270 750
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  123456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  213456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  321456
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    border: '2px solid white',
                    background: '#41A4FF',
                    color: 'white',
                  }}
                >
                  432156
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    border: '2px solid white',
                    background: '#0062BC',
                    color: 'white',
                  }}
                >
                  543216
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    background: '#F1F1F1',
                    border: '2px solid #E9F2FB',
                    fontWeight: 'bold',
                    fontSize: '14.5px',
                    color: '#565853',
                  }}
                >
                  270 750
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  123456
                </TableCell>
                <TableCell
                  align="right"
                  style={{ border: '2px solid white', background: '#8DC8FF' }}
                >
                  213456
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    border: '2px solid white',
                    background: '#41A4FF',
                    color: 'white',
                  }}
                >
                  321456
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    border: '2px solid white',
                    background: '#0062BC',
                    color: 'white',
                  }}
                >
                  432156
                </TableCell>
                <TableCell
                  align="right"
                  variant="head"
                  style={{
                    border: '2px solid white',
                    background: '#0062BC',
                    color: 'white',
                  }}
                >
                  543216
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  function renderSalesActivityHistory() {
    return (
      <Box className={classes.salesActivityHistoryContainer}>
        <Typography className={classes.sectionTitle}>
          Sales Activity History
        </Typography>
        <Paper className="mt-20">
          <Grid container direction="row">
            <Grid item xs={6} className="p-20" style={{ height: '400px' }}>
              <PaperMap />
            </Grid>
            <Grid item xs={6} className="p-20" style={{ height: '400px' }}>
              <PaperMap />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }

  function renderForcastGraph() {
    return (
      <Box className={classes.forcastGraphContainer}>
        <Typography className={classes.sectionTitle}>Forecast</Typography>
        <Paper className="mt-20 p-20">
          <Grid container direction="row">
            <Grid item xs={12} style={{ height: '400px' }}>
              <PaperMap />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }

  function renderAcuisitionDepTable() {
    return (
      <Box className={classes.acuisitionDepTableContainer}>
        <TableContainer
          component={Paper}
          style={{ marginTop: '16px', padding: '0 10px' }}
        >
          <Table className={classes.table} aria-label="Acuisition Table Head">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '300px' }} />
                <TableCell align="right" style={{ fontWeight: 'bold' }}>
                  Year 1
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>
                  Year 2
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>
                  Year 3
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>
                  Year 5
                </TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>
                  Year 10
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          style={{ marginTop: '16px', padding: '0 10px' }}
        >
          <Typography
            className={classes.sectionTitle}
            style={{ padding: '20px 10px 0' }}
          >
            Acuisition
          </Typography>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {acuisitionRows.map((row, index) => (
                <TableRow key={row.year1}>
                  <TableCell
                    component="th"
                    scope="row"
                    variant="head"
                    style={{
                      width: '300px',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                      fontWeight: index === acuisitionRows.length - 1 && 'bold',
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year1}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year2}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year3}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year5}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year10}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          style={{ marginTop: '16px', padding: '0 10px' }}
        >
          <Typography
            className={classes.sectionTitle}
            style={{ padding: '20px 10px 0' }}
          >
            Debt
          </Typography>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {depRows.map((row, index) => (
                <TableRow key={row.year1}>
                  <TableCell
                    component="th"
                    scope="row"
                    variant="head"
                    style={{
                      width: '300px',
                      borderBottom:
                        index === depRows.length - 2 ? '1px solid #0083FC' : 0,
                      color: index === depRows.length - 1 ? '#0083FC' : 'black',
                      fontWeight: index === depRows.length - 1 && 'bold',
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === depRows.length - 2 ? '1px solid #0083FC' : 0,
                      color: index === depRows.length - 1 ? '#0083FC' : 'black',
                    }}
                  >
                    {row.year1}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === depRows.length - 2 ? '1px solid #0083FC' : 0,
                      color: index === depRows.length - 1 ? '#0083FC' : 'black',
                    }}
                  >
                    {row.year2}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === depRows.length - 2 ? '1px solid #0083FC' : 0,
                      color: index === depRows.length - 1 ? '#0083FC' : 'black',
                    }}
                  >
                    {row.year3}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === depRows.length - 2 ? '1px solid #0083FC' : 0,
                      color: index === depRows.length - 1 ? '#0083FC' : 'black',
                    }}
                  >
                    {row.year5}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === depRows.length - 2 ? '1px solid #0083FC' : 0,
                      color: index === depRows.length - 1 ? '#0083FC' : 'black',
                    }}
                  >
                    {row.year10}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          style={{ marginTop: '16px', padding: '0 10px' }}
        >
          <Typography
            className={classes.sectionTitle}
            style={{ padding: '20px 10px 0' }}
          >
            Acuisition
          </Typography>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {acuisitionRows.map((row, index) => (
                <TableRow key={row.year1}>
                  <TableCell
                    component="th"
                    scope="row"
                    variant="head"
                    style={{
                      width: '300px',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                      fontWeight: index === acuisitionRows.length - 1 && 'bold',
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year1}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year2}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year3}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year5}
                  </TableCell>
                  <TableCell
                    align="right"
                    variant="head"
                    style={{
                      fontWeight: 'bold',
                      borderBottom:
                        index === acuisitionRows.length - 2
                          ? '1px solid #0083FC'
                          : 0,
                      color:
                        index === acuisitionRows.length - 1
                          ? '#0083FC'
                          : 'black',
                    }}
                  >
                    {row.year10}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  return (
    <>
      <div className={classes.analysisWrapper}>
        <Helmet>
          <title>Analysis</title>
          <meta name="description" content="Description of Analysis" />
        </Helmet>
        <Grid item container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.pageTitle}>
              Report
            </Typography>
            <Typography variant="h6" className={classes.pageBiggerTitle}>
              Analytics overview
            </Typography>
          </Grid>
        </Grid>
        {displayOverviewStats()}
        {renderPropertyInformationAndSlider()}
        {renderPropertyInformationAndMap()}
        {renderSensitivityTable()}
        {renderSalesActivityHistory()}
        {renderForcastGraph()}
        {renderAcuisitionDepTable()}
        {open && <SettingDrawer open={open} setOpen={setOpen} />}

        {/* {!props.isGettingAnalysisById ? (
        [
          displayProperty(),
          displayInvestmentKpi(),
          displayCapital(),
          displayReturns(),
        ]
      ) : (
        <Skeleton count={6} height={100} />
      )}
      <EstimatedProfitTable props={props} />
      <BreakdownTable props={props} />
      <ValuationModal props={props} />
      <Criteria props={props} /> */}
      </div>
      <div className={classes.settingIconContainer}>
        <button
          type="button"
          className={classes.settingIconWrapper}
          onClick={() => setOpen(true)}
        >
          <img src={SettingIcon} width={44} height={44} alt="setting" />
        </button>
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
  isGettingAnalysisById: makeSelectIsGettingAnalysisById(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAnalysisDataById: id => dispatch(getAnalysisDataById(id)),
    getPropertyLocations: () => dispatch(getPropertyLocations()),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getCIPs: () => dispatch(getCIPs()),
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
