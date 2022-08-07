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
import { capitalRows } from '../../_helper';
import { useStyles } from '../../styles';

const PropertyInformationAndMap = ({ props }) => {
  console.log('props ===', props);
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
                  {props.analysis &&
                    props.analysis.investmentKpi &&
                    props.analysis.investmentKpi.rows &&
                    props.analysis.investmentKpi.rows.map(row => (
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
                  {props.analysis &&
                    props.analysis.captial &&
                    props.analysis.captial.rows &&
                    props.analysis.captial.rows.map((row, index) => (
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
};
export default PropertyInformationAndMap;
