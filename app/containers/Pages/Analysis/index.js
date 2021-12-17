import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { useForm } from 'react-hook-form';
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
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { injectIntl } from 'react-intl';
import {
  makeSelectAnalysis,
  makeSelectLocations,
  makeSelectLocation,
} from './selectors';
import reducer from './reducer';
import { setLocation } from './actions';
import PaperMap from '../../../components/PaperMap';
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
}));

// function createData(
//   location,
//   asking,
//   capital,
//   costs,
//   price,
//   irr,
//   profit,
//   report,
// ) {
//   return { location, asking, capital, costs, price, irr, profit, report };
// }

// const rows = [
//   createData('', '', '', '', '', '', '', ''),
//   createData('', '', '', '', '', '', '', ''),
//   createData('', '', '', '', '', '', '', ''),
//   createData('', '', '', '', '', '', '', ''),
//   createData('', '', '', '', '', '', '', ''),
//   createData('', '', '', '', '', '', '', ''),
//   createData('', '', '', '', '', '', '', ''),
// ];

export function Analysis(props) {
  useInjectReducer({ key: 'analysis', reducer });
  const classes = useStyles();
  // const { register, handleSubmit } = useForm();
  // const [result, setResult] = React.useState('');
  // const onSubmit = data => {
  //   setResult(JSON.stringify(data));
  // };
  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

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
              value={props.location}
              onChange={event => {
                props.setLocation(event.target.value);
              }}
            >
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Dwelling">Dwelling</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlWidth}>
            <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
            >
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Dwelling">Dwelling</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlWidth}>
            <InputLabel id="demo-simple-select-standard-label">
              Typology
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
            >
              <MenuItem value="Leased">Leased</MenuItem>
              <MenuItem value="Vacant">Vacant</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" className={classes.ctrlEndWidth}>
            <InputLabel id="demo-simple-select-standard-label">
              Condition
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
            >
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Used">Used</MenuItem>
              <MenuItem value="All">All</MenuItem>
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
              startAdornment={
                <InputAdornment position="start">m2</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </>
    );
  }

  // function renderAccordion() {
  //   return (
  //     <Grid className={classes.rowSpacing}>
  //       <Accordion>
  //         <AccordionSummary
  //           expandIcon={<ExpandMoreIcon />}
  //           aria-controls="panel1a-content"
  //           id="panel1a-header"
  //         >
  //           <Typography>Investment Information</Typography>
  //         </AccordionSummary>
  //         <AccordionDetails>
  //           <Typography>{renderAcod1()}</Typography>
  //         </AccordionDetails>
  //       </Accordion>
  //       <Accordion>
  //         <AccordionSummary
  //           expandIcon={<ExpandMoreIcon />}
  //           aria-controls="panel2a-content"
  //           id="panel2a-header"
  //         >
  //           <Typography>Other Investment Information</Typography>
  //         </AccordionSummary>
  //         <AccordionDetails>
  //           <Typography>{renderAcod2()}</Typography>
  //         </AccordionDetails>
  //       </Accordion>
  //       <Accordion>
  //         <AccordionSummary
  //           expandIcon={<ExpandMoreIcon />}
  //           aria-controls="panel3a-content"
  //           id="panel3a-header"
  //         >
  //           <Typography>Valuation Model Configuration</Typography>
  //         </AccordionSummary>
  //         <AccordionDetails>
  //           <Typography>{renderAcod3()}</Typography>
  //         </AccordionDetails>
  //       </Accordion>
  //     </Grid>
  //   );
  // }

  // function renderAcod1() {
  //   return (
  //     <Grid>
  //       <FormControl variant="standard" className={classes.inputWidth}>
  //         <InputLabel htmlFor="standard-adornment-amount">
  //           Min Capital
  //         </InputLabel>
  //         <Input
  //           id="standard-adornment-amount"
  //           type="number"
  //           {...register('minCapital')}
  //           startAdornment={
  //             <InputAdornment position="start">&#8364;</InputAdornment>
  //           }
  //         />
  //       </FormControl>
  //       <FormControl variant="standard" className={classes.inputWidth}>
  //         <InputLabel htmlFor="standard-adornment-amount">
  //           Max Capital
  //         </InputLabel>
  //         <Input
  //           id="standard-adornment-amount"
  //           type="number"
  //           startAdornment={
  //             <InputAdornment position="start">&#8364;</InputAdornment>
  //           }
  //         />
  //       </FormControl>
  //       <FormControl variant="standard" className={classes.inputWidth}>
  //         <InputLabel htmlFor="standard-adornment-amount">Bid Ask</InputLabel>
  //         <Input
  //           id="standard-adornment-amount"
  //           type="number"
  //           startAdornment={<InputAdornment position="start">%</InputAdornment>}
  //         />
  //       </FormControl>
  //       <FormControl variant="standard" className={classes.inputEndWidth}>
  //         <InputLabel htmlFor="standard-adornment-amount">
  //           Financing Rate
  //         </InputLabel>
  //         <Input
  //           id="standard-adornment-amount"
  //           type="number"
  //           startAdornment={<InputAdornment position="start">%</InputAdornment>}
  //         />
  //       </FormControl>
  //     </Grid>
  //   );
  // }

  // function renderAcod2() {
  //   return (
  //     <Grid>
  //       {renderAcod21()}
  //       {renderAcod22()}
  //       {renderAcod23()}
  //       {renderAcod24()}
  //     </Grid>
  //   );
  // }

  // function renderAcod21() {
  //   return (
  //     <Grid>
  //       <Grid>
  //         <h5 className={classes.title}>Acquisition Assumptions</h5>
  //       </Grid>
  //       <Grid>
  //         <FormControl variant="standard" className={classes.doubleWidth}>
  //           <InputLabel id="demo-simple-select-standard-label">
  //             Acquisition Type
  //           </InputLabel>
  //           <Select
  //             labelId="demo-simple-select-standard-label"
  //             id="demo-simple-select-standard"
  //           >
  //             <MenuItem value="">
  //               <em>None</em>
  //             </MenuItem>
  //             <MenuItem value="investment">Investment</MenuItem>
  //             <MenuItem value="residence">for Main Residence</MenuItem>
  //           </Select>
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Entry Fee
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Stamp Duty
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //       <Grid className={classes.rowSpacing}>
  //         <FormControl variant="standard" className={classes.inputLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Land Registry with Mortgage
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">&#8364;</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputEndLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Land Registry without Mortgage
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">&#8364;</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  // function renderAcod22() {
  //   return (
  //     <Grid>
  //       <Grid>
  //         <h5 className={classes.title}>Finance Assumptions</h5>
  //       </Grid>
  //       <Grid>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Interest Rate
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Bank Commission
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">&#8364;</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Amortization
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">Years</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //       <Grid className={classes.rowSpacing}>
  //         <FormControl variant="standard" className={classes.inputLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Stamp Duty Mortgage
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputEndLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Stamp Duty Interests
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  // function renderAcod23() {
  //   return (
  //     <Grid>
  //       <Grid>
  //         <h5 className={classes.title}>Operating Assumptions</h5>
  //       </Grid>
  //       <Grid>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Condominium Costs
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">&#8364;</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Property Tax Rate
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  // function renderAcod24() {
  //   return (
  //     <Grid>
  //       <Grid>
  //         <h5 className={classes.title}>Exit Assumptions</h5>
  //       </Grid>
  //       <Grid>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Time to Sale
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">Month</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             IRS Rate
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputEndWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Exit Broker Fee
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //       <Grid className={classes.rowSpacing}>
  //         <FormControl variant="standard" className={classes.inputLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Loan Early Repayment Fee
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputEndLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Capital gains Tax Base
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  // function renderAcod3() {
  //   return (
  //     <Grid>
  //       <Grid>
  //         <FormControl variant="standard" className={classes.inputLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Gross Construction to Private Area
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">Floor</InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">Cap</InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">%</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //       <Grid className={classes.rowSpacing}>
  //         <FormControl variant="standard" className={classes.doubleWidth}>
  //           <InputLabel id="demo-simple-select-standard-label">
  //             Confidencial Imobiliario Percentile
  //           </InputLabel>
  //           <Select
  //             labelId="demo-simple-select-standard-label"
  //             id="demo-simple-select-standard"
  //           >
  //             <MenuItem value="">
  //               <em>None</em>
  //             </MenuItem>
  //             <MenuItem value={5}>5%</MenuItem>
  //             <MenuItem value={25}>25%</MenuItem>
  //             <MenuItem value={50}>50%</MenuItem>
  //             <MenuItem value={75}>75%</MenuItem>
  //             <MenuItem value={95}>95%</MenuItem>
  //           </Select>
  //         </FormControl>
  //         <FormControl variant="standard" className={classes.inputEndLgWidth}>
  //           <InputLabel htmlFor="standard-adornment-amount">
  //             Min Observations for Percentile
  //           </InputLabel>
  //           <Input
  //             id="standard-adornment-amount"
  //             type="number"
  //             startAdornment={
  //               <InputAdornment position="start">#</InputAdornment>
  //             }
  //           />
  //         </FormControl>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  // function renderTable() {
  //   return (
  //     <>
  //       <TableContainer component={Paper}>
  //         <Table aria-label="customized table">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Location
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Asking
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Entry Capital
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Operating Costs
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Exit Price
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 IRR
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Profit
  //               </TableCell>
  //               <TableCell className={classes.tableHead} align="center">
  //                 Report
  //               </TableCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {rows.map(row => (
  //               <TableRow
  //                 key={row.name}
  //                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //                 className={classes.tableBody}
  //               >
  //                 <TableCell component="th" scope="row" align="center">
  //                   {row.location}
  //                 </TableCell>
  //                 <TableCell align="center">{row.asking}</TableCell>
  //                 <TableCell align="center">{row.capital}</TableCell>
  //                 <TableCell align="center">{row.costs}</TableCell>
  //                 <TableCell align="center">{row.price}</TableCell>
  //                 <TableCell align="center">{row.irr}</TableCell>
  //                 <TableCell align="center">{row.profit}</TableCell>
  //                 <TableCell align="center">{row.report}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </>
  //   );
  // }

  return (
    <Grid>
      <Helmet>
        <title>Analysis</title>
        <meta name="description" content="Description of Analysis" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <Grid item container>
        <form className={classes.w100}>
          <Grid key="property-info" item container direction="row">
            <Grid key="form-control" item container xs={8}>
              <h5>Property Information</h5>
              {renderPropertyForm()}
              {/* {renderAccordion()} */}
            </Grid>
            <Grid key="google-map" item container xs={4}>
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
        </form>
        {/* <p>{result}</p> */}
        <Grid key="table" item container direction="row">
          <Grid className={classes.w100}>
            <h5>Investments</h5>
            {/* {renderTable()} */}
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
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    setLocation: location => dispatch(setLocation(location)),
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
