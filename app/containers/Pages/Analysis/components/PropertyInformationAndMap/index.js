import React from 'react';
import PaperMap from 'components/PaperMap';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import messages from '../../messages';
import { useStyles } from '../../styles';

const PropertyInformationAndMap = ({ props }) => {
  const classes = useStyles();
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
              {props.intl.formatMessage({
                ...messages.investmentKpi,
              })}
            </Typography>
            <TableContainer
              component={Paper}
              style={{ marginTop: '16px', padding: '0 14px' }}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.intl.formatMessage({
                        ...messages.bidAskRateInfo,
                      })}
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>
                      €{' '}
                      {props &&
                        props.analysis &&
                        props.analysis.askingPricePerSquareMeter &&
                        props.analysis.askingPricePerSquareMeter}{' '}
                      €/sqm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.intl.formatMessage({
                        ...messages.proposedEntryPrice,
                      })}
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>
                      €{' '}
                      {props &&
                        props.analysis &&
                        props.analysis.overrideTransactionPricePerSquareMeter &&
                        props.analysis
                          .overrideTransactionPricePerSquareMeter}{' '}
                      €/sqm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.intl.formatMessage({
                        ...messages.estimatedExitPrice,
                      })}
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>
                      €{' '}
                      {props &&
                        props.analysis &&
                        props.analysis.overrideTransactionPricePerSquareMeter &&
                        props.analysis
                          .overrideTransactionPricePerSquareMeter}{' '}
                      €/sqm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.intl.formatMessage({
                        ...messages.timeToScales,
                      })}
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>
                      {props &&
                        props.analysis &&
                        props.analysis.operatingCosts &&
                        props.analysis.operatingCosts.toFixed(0)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className={classes.sectionTableWrapper}>
            <Typography className={classes.sectionTitle}>
              {props.intl.formatMessage({
                ...messages.capital,
              })}
            </Typography>
            <TableContainer
              component={Paper}
              style={{ marginTop: '16px', padding: '0 14px' }}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {props.intl.formatMessage({
                        ...messages.requiredEntryCapital,
                      })}
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>
                      €{' '}
                      {props &&
                        props.analysis &&
                        props.analysis.entryCapital &&
                        props.analysis.entryCapital}{' '}
                      €/sqm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        borderBottom: '1px solid #0083FC',
                      }}
                    >
                      {props.intl.formatMessage({
                        ...messages.requiredCapitalInvestment,
                      })}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        fontWeight: 'bold',
                        color: '#0083FC',
                        borderBottom: '1px solid #0083FC',
                      }}
                    >
                      €{' '}
                      {props &&
                        props.analysis &&
                        props.analysis.rett &&
                        props.analysis.rett}{' '}
                      €/sqm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      variant="head"
                      style={{ fontWeight: 'bold', color: '#0083FC' }}
                    >
                      {props.intl.formatMessage({
                        ...messages.totalRequiredInfo,
                      })}
                    </TableCell>
                    <TableCell
                      align="right"
                      variant="head"
                      style={{ fontWeight: 'bold', color: '#0083FC' }}
                    >
                      €{' '}
                      {props &&
                        props.analysis &&
                        props.analysis.openingBalance &&
                        props.analysis.openingBalance}{' '}
                      €/sqmm
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyInformationAndMap;
