/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from 'react-loading-skeleton';
import { useStyles } from 'containers/Pages/Analysis/style';

const DisplayTable = ({ props }) => {
  const classes = useStyles();
  return (
    <div>
      {!props.isGettingAnalysisById ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {props.anaylsis &&
                  props.anaylsis.breakdownTable &&
                  props.anaylsis.breakdownTable.columns &&
                  props.anaylsis.breakdownTable.columns.map((column, index) => (
                    <TableCell
                      align="center"
                      key={index}
                      className={classes.tableLabel}
                    >
                      {column.label}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.anaylsis &&
                props.anaylsis.breakdownTable &&
                props.anaylsis.breakdownTable.rows &&
                props.anaylsis.breakdownTable.rows.map(row => (
                  <TableRow>
                    {Object.entries(row).map((rowInfo, index) => (
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        className={`${row.bold ? classes.tableLabel : ''}`}
                      >
                        {row[`v${index}`]}
                      </TableCell>
                    ))}
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