/* eslint-disable react/no-array-index-key */
import React from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Skeleton from 'react-loading-skeleton';
import { useStyles } from '../../styles';

const DisplayTable = ({ props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.acuisitionDepTableContainer}>
      <TableContainer
        component={Paper}
        style={{ marginTop: '16px', padding: '0 10px' }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.analysis &&
                props.analysis.breakdownTable &&
                props.analysis.breakdownTable.columns &&
                props.analysis.breakdownTable.columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align="right"
                    style={{
                      fontWeight: 'bold',
                      width: index === 0 ? '300px' : 'auto',
                    }}
                  >
                    {column.label && `Year ${column.label}`}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.analysis &&
              props.analysis.breakdownTable &&
              props.analysis.breakdownTable.rows &&
              props.analysis.breakdownTable.rows.map(row => (
                <TableRow>
                  {Object.entries(row).map((rowInfo, index) => (
                    <TableCell
                      align={index > 0 ? 'right' : 'left'}
                      component="th"
                      scope="row"
                      variant="head"
                      style={{
                        width: index === 0 ? '300px' : 'auto',
                        borderBottom: row.bold ? '.5px solid lightgray' : 0,
                        borderTop: row.bold ? '0.5px solid #0083FC' : 0,
                        color: row.bold ? '#0083FC' : 'black',
                        fontWeight: row.bold ? 'bold' : 'normal',
                        fontSize: row.title && '20px',
                        textTransform: 'capitalize',
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
export default DisplayTable;
