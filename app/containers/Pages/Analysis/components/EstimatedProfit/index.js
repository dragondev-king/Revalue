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
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import messages from '../../messages';

const DisplayEstimatedProfit = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid item container spacing={4} className="mb-10 p-10">
      {!props.isGettingAnalysisById ? (
        <>
          <Grid item className="mb-5">
            <Typography variant="h6">
              {props.intl.formatMessage({
                ...messages.estimatedProfit,
              })}
            </Typography>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {props.estimatedTableColumns.map((column, index) => (
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
                {props.estimatedTableRows.map(row => (
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
        </>
      ) : (
        <Skeleton count={1} height={400} />
      )}
    </Grid>
  );
};
export default DisplayEstimatedProfit;
