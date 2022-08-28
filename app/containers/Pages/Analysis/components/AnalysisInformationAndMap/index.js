import React from 'react';
import Map from 'containers/Map';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import messages from '../../../Investments/messages';
import { useStyles } from '../../styles';

const AnalysisInformationAndMap = ({ props }) => {
  const classes = useStyles();
  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid
          item
          container
          direction="row"
          className={classes.propertyInformationAndMapContainer}
        >
          <Grid item xs={6} className="pr-40">
            <Map propertyLocation={props.analysis.location} disabled />
          </Grid>
          <Grid item container xs={6}>
            <Grid style={{ width: '100%' }}>
              <Grid
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
                            ...messages.askingPrice,
                          })}
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>
                          € {formatNumber(props.analysis.property.askingPrice)}
                          {'  '}
                          <span
                            style={{ fontWeight: 'normal', color: '#565853' }}
                          >
                            |{' '}
                            {formatNumber(
                              props.analysis.askingPricePerSquareMeter,
                            )}{' '}
                            € / m²
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {props.intl.formatMessage({
                            ...messages.acquisitionPrice,
                          })}
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>
                          € {formatNumber(props.analysis.acquisitionPrice)}
                          {'  '}
                          <span
                            style={{ fontWeight: 'normal', color: '#565853' }}
                          >
                            |{' '}
                            {formatNumber(
                              props.analysis.acquisitionPricePerSquareMeter,
                            )}{' '}
                            € / m²
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {props.intl.formatMessage({
                            ...messages.transactionPrice,
                          })}
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>
                          € {formatNumber(props.analysis.transactionPrice)}{' '}
                          <span
                            style={{ fontWeight: 'normal', color: '#565853' }}
                          >
                            |{' '}
                            {formatNumber(
                              props.analysis
                                .overrideTransactionPricePerSquareMeter,
                            )}
                            {'  '}€ / m²
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {props.intl.formatMessage({
                            ...messages.timeToSale,
                          })}
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>
                          {props.analysis.criteria.timeToSale}{' '}
                          {props.intl.formatMessage({
                            ...messages.months,
                          })}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid className={classes.sectionTableWrapper}>
                <Typography className={classes.sectionTitle}>
                  {props.intl.formatMessage({
                    ...messages.entryCapital,
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
                            ...messages.entryCapital,
                          })}
                        </TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>
                          € {formatNumber(props.analysis.entryCapital)}
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
                            ...messages.requiredCapitalOverPeriod,
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
                          {formatNumber(
                            props.analysis.requiredCapitalOverPeriod,
                          )}
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
                            ...messages.totalRequiredCapitalOverPeriod,
                          })}
                        </TableCell>
                        <TableCell
                          align="right"
                          variant="head"
                          style={{ fontWeight: 'bold', color: '#0083FC' }}
                        >
                          € {formatNumber(props.analysis.totalRequiredCapital)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Skeleton count={6} height={100} />
      )}
    </>
  );
};

export default AnalysisInformationAndMap;
