/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from 'react-loading-skeleton';
import { useStyles } from '../../styles';
import messages from '../../messages';

const EstimatedProfitTable = ({ props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sensitivityTableContainer}>
      {!props.isGettingAnalysisById ? (
        <>
          <Typography className={classes.sectionTitle}>
            {props.intl.formatMessage({
              ...messages.sensitivityTable,
            })}
          </Typography>
          <TableContainer
            component={Paper}
            style={{ marginTop: '16px', padding: '16px 16px' }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={6}
                    style={{
                      border: '2px solid #E9F2FB',
                      fontWeight: 'bold',
                      fontSize: '16px',
                    }}
                  >
                    {props.intl.formatMessage({
                      ...messages.acquistionPrice,
                    })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  {props.analysis &&
                    props.analysis.estimatedProfitTable &&
                    props.analysis.estimatedProfitTable.columns &&
                    props.analysis.estimatedProfitTable.columns.map(
                      (column, index) => (
                        <TableCell
                          rowSpan={2}
                          align="right"
                          variant="head"
                          key={index}
                          style={{
                            background: '#F1F1F1',
                            border: '2px solid #E9F2FB',
                            fontWeight: 'bold',
                            fontSize: '14.5px',
                            color: '#565853',
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ),
                    )}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.analysis &&
                  props.analysis.estimatedProfitTable &&
                  props.analysis.estimatedProfitTable.rows &&
                  props.analysis.estimatedProfitTable.rows.map(row => (
                    <TableRow>
                      {Object.entries(row).map((rowInfo, index) => (
                        <TableCell
                          align="right"
                          component="th"
                          scope="row"
                          style={{
                            background: index === 0 && '#F1F1F1',
                            border: '2px solid #E9F2FB',
                            fontWeight: index === 0 && 'bold',
                            fontSize: '14.5px',
                            color: '#565853',
                          }}
                        >
                          {row[`v${index}`].toFixed(2)}
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
    </Box>
  );
};
export default EstimatedProfitTable;
