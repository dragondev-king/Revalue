/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import { Grid } from '@material-ui/core';
import { useStyles } from 'containers/Pages/Analysis/styles';
import messages from 'containers/Pages/Analysis/messages';

const colors = [
  {
    0: '#F1F1F1',
    5: '#CDE7FF',
    4: '#CDE7FF',
    3: '#CDE7FF',
    2: '#8DC8FF',
    1: '#8DC8FF',
  },
  {
    0: '#F1F1F1',
    5: '#CDE7FF',
    4: '#CDE7FF',
    3: '#CDE7FF',
    2: '#8DC8FF',
    1: '#8DC8FF',
  },
  {
    0: '#F1F1F1',
    5: '#CDE7FF',
    4: '#8DC8FF',
    3: '#FFFFFF',
    2: '#8DC8FF',
    1: '#41A4FF',
  },
  {
    0: '#F1F1F1',
    5: '#8DC8FF',
    4: '#8DC8FF',
    3: '#8DC8FF',
    2: '#41A4FF',
    1: '#0062BC',
  },
  {
    0: '#F1F1F1',
    5: '#8DC8FF',
    4: '#8DC8FF',
    3: '#41A4FF',
    2: '#0062BC',
    1: '#0062BC',
  },
];

const EstimatedProfitTable = ({ props }) => {
  const classes = useStyles();
  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid>
          <Typography className={classes.sectionTitle}>
            {props.intl.formatMessage({
              ...messages.sensitivityTable,
            })}
          </Typography>
          <TableContainer
            component={Paper}
            style={{ marginTop: '15px', padding: '16px 16px' }}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={7}
                    style={{
                      fontWeight: 'bold',
                      fontSize: '14px',
                      borderBottom: '0px',
                      paddingBottom: '10px',
                      paddingLeft: '375px',
                    }}
                  >
                    {props.intl.formatMessage({
                      ...messages.acquisitionPrice,
                    })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    variant="head"
                    style={{ borderBottom: '0px' }}
                  />
                  {props.analysis &&
                    props.analysis.estimatedProfitTable &&
                    props.analysis.estimatedProfitTable.columns &&
                    props.analysis.estimatedProfitTable.columns.map(
                      (column, index) => (
                        <TableCell
                          align="right"
                          variant="head"
                          key={index}
                          style={{
                            background: column.label
                              ? '#F1F1F1'
                              : 'transparent',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            borderBottom: '0px',
                          }}
                        >
                          {formatNumber(column.label)}
                        </TableCell>
                      ),
                    )}
                </TableRow>
              </TableHead>
              <TableBody key="estimatedProfitTableBody">
                <TableRow key="estimatedProfitTableRowTransactionPrice">
                  <TableCell
                    align="center"
                    rowSpan={6}
                    style={{
                      fontWeight: 'bold',
                      fontSize: '14px',
                      borderBottom: '0px',
                    }}
                  >
                    {props.intl.formatMessage({
                      ...messages.transactionPrice,
                    })}
                  </TableCell>
                </TableRow>
                {props.analysis &&
                  props.analysis.estimatedProfitTable &&
                  props.analysis.estimatedProfitTable.rows &&
                  props.analysis.estimatedProfitTable.rows.map((row, ind) => (
                    <TableRow key={ind}>
                      {Object.entries(row).map((rowInfo, index) => (
                        <TableCell
                          align="right"
                          key={index}
                          variant="head"
                          style={{
                            background: colors[ind][index],
                            fontWeight:
                              index === 0 ||
                              (colors[ind][index] === '#FFFFFF' && 'bold'),
                            fontSize: '14px',
                            color:
                              colors[ind][index] === '#0062BC' ||
                              colors[ind][index] === '#41A4FF'
                                ? 'white'
                                : 'black',
                            borderBottom: '0px',
                          }}
                        >
                          {formatNumber(row[`v${index}`])}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ) : (
        <Skeleton animation="wave" count={1} height={100} />
      )}
    </>
  );
};
export default EstimatedProfitTable;
