import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from 'react-loading-skeleton';
import { useStyles } from './style';

const DisplayTable = ({ props }) => {
  const classes = useStyles();
  return (
    <div>
      {!props.isGettingAnalysisById ? (
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
      ) : (
        <Skeleton count={1} height={400} />
      )}
    </div>
  );
};
export default DisplayTable;
