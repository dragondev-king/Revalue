import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import messages from '../../messages';
import { useStyles } from '../../styles';

const AcuisitionDepTable = ({ props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.acuisitionDepTableContainer}>
      <TableContainer
        component={Paper}
        style={{ marginTop: '16px', padding: '0 10px' }}
      >
        <Table className={classes.table} aria-label="Acuisition Table Head">
          <TableHead>
            <TableRow>
              {props.analysis &&
                props.analysis.acuisitionDebt &&
                props.analysis.acuisitionDebt.columns &&
                props.analysis.acuisitionDebt.columns.map((item, index) => (
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: 'bold',
                      width: index === 0 ? '300px' : 'auto',
                    }}
                  >
                    {item.label}
                  </TableCell>
                ))}
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
          {props.intl.formatMessage({
            ...messages.acuisition,
          })}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {props.analysis &&
              props.analysis.acuisition &&
              props.analysis.acuisition.rows &&
              props.analysis.acuisition.rows.map((row, ind) => (
                <TableRow>
                  {Object.entries(row).map((rowInfo, index) => (
                    <TableCell
                      align={index > 0 ? 'right' : 'left'}
                      component="th"
                      scope="row"
                      variant="head"
                      style={{
                        width: index === 0 ? '300px' : 'auto',
                        borderBottom:
                          ind === props.analysis.acuisition.rows.length - 2
                            ? '1px solid #0083FC'
                            : 0,
                        color:
                          ind === props.analysis.acuisition.rows.length - 1
                            ? '#0083FC'
                            : 'black',
                        fontWeight:
                          ind === props.analysis.acuisition.rows.length - 1 &&
                          'bold',
                      }}
                    >
                      {row[`v${index}`]}
                    </TableCell>
                  ))}
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
          {props.intl.formatMessage({
            ...messages.debt,
          })}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {props.analysis &&
              props.analysis.debt &&
              props.analysis.debt.rows &&
              props.analysis.debt.rows.map((row, ind) => (
                <TableRow>
                  {Object.entries(row).map((rowInfo, index) => (
                    <TableCell
                      align={index > 0 ? 'right' : 'left'}
                      component="th"
                      scope="row"
                      variant="head"
                      style={{
                        width: index === 0 ? '300px' : 'auto',
                        borderBottom:
                          ind === props.analysis.debt.rows.length - 2
                            ? '1px solid #0083FC'
                            : 0,
                        color:
                          ind === props.analysis.debt.rows.length - 1
                            ? '#0083FC'
                            : 'black',
                        fontWeight:
                          ind === props.analysis.debt.rows.length - 1 && 'bold',
                      }}
                    >
                      {row[`v${index}`]}
                    </TableCell>
                  ))}
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
          {props.intl.formatMessage({
            ...messages.acuisition,
          })}
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {props.analysis &&
              props.analysis.acuisition &&
              props.analysis.acuisition.rows &&
              props.analysis.acuisition.rows.map((row, ind) => (
                <TableRow>
                  {Object.entries(row).map((rowInfo, index) => (
                    <TableCell
                      align={index > 0 ? 'right' : 'left'}
                      component="th"
                      scope="row"
                      variant="head"
                      style={{
                        width: index === 0 ? '300px' : 'auto',
                        borderBottom:
                          ind === props.analysis.acuisition.rows.length - 2
                            ? '1px solid #0083FC'
                            : 0,
                        color:
                          ind === props.analysis.acuisition.rows.length - 1
                            ? '#0083FC'
                            : 'black',
                        fontWeight:
                          ind === props.analysis.acuisition.rows.length - 1 &&
                          'bold',
                      }}
                    >
                      {row[`v${index}`]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AcuisitionDepTable;
