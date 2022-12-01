/* eslint-disable react/no-array-index-key */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import { Grid, Typography } from '@material-ui/core';
import Scrollbar from 'react-perfect-scrollbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from 'containers/Pages/Analysis/styles';
import { InfoIcon } from 'components/SvgIconComponents';
import messages from './messages';

const BreakdownTable = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid>
      {!props.isGettingAnalysisById ? (
        <Paper className={classes.breakdownTablePaper}>
          <Scrollbar className="scrollable position-relative">
            <TableContainer style={{ overflow: 'unset' }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow key="tableHeader">
                    {props.analysis &&
                      props.analysis.breakdownTable &&
                      props.analysis.breakdownTable.columns &&
                      props.analysis.breakdownTable.columns.map(
                        (column, index) =>
                          index === 0 ? (
                            <>
                              <TableCell
                                key={index}
                                align="center"
                                style={{
                                  fontWeight: 'bold',
                                  zIndex: 3,
                                  height: '60px',
                                  width: '350px',
                                  minWidth: '350px',
                                }}
                              >
                                {column.label &&
                                  `${props.intl.formatMessage({
                                    ...messages.month,
                                  })} ${column.label}`}
                              </TableCell>
                              {/*  <TableCell
                                key={`${index}total`}
                                align="center"
                                style={{
                                  fontWeight: 'bold',
                                  width: 'auto',
                                  minWidth: '100px',
                                }}
                              >
                                {props.intl.formatMessage({
                                  ...messages.total,
                                })}
                              </TableCell> */}
                            </>
                          ) : (
                            <TableCell
                              key={index}
                              align="center"
                              style={{
                                fontWeight: 'bold',
                                width: 'auto',
                                minWidth: '100px',
                              }}
                            >
                              {column.label &&
                                `${props.intl.formatMessage({
                                  ...messages.month,
                                })} ${column.label}`}
                            </TableCell>
                          ),
                      )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.analysis &&
                    props.analysis.breakdownTable &&
                    props.analysis.breakdownTable.rows &&
                    props.analysis.breakdownTable.rows.map(row => (
                      <TableRow key={row.v0}>
                        {Object.entries(row).map((rowInfo, index) =>
                          index === 0 ? (
                            <>
                              <TableCell
                                key={index + row.v0}
                                align="left"
                                style={{
                                  width: '300px',
                                  position: 'sticky',
                                  borderRight: 'ridge',
                                  borderRightWidth: 'thin',
                                  left: 0,
                                  background: 'white',
                                  borderBottom: row.bold
                                    ? '.5px solid lightgray'
                                    : 0,
                                  borderTop: row.bold
                                    ? '0.5px solid #0083FC'
                                    : 0,
                                  color: row.bold ? '#0083FC' : 'black',
                                  fontWeight: row.bold ? 'bold' : 'normal',
                                  fontSize: row.title && '20px',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {props.intl.formatMessage({
                                  ...messages[row.v0],
                                })}
                                {!row.title && (
                                  <Tooltip
                                    title={
                                      <Typography
                                        variant="body1"
                                        className="text-white"
                                      >
                                        {props.intl.formatMessage({
                                          ...messages[`${row.v0}Info`],
                                        })}
                                      </Typography>
                                    }
                                  >
                                    <IconButton className={classes.iconButton}>
                                      <InfoIcon />
                                    </IconButton>
                                  </Tooltip>
                                )}
                                {row.v0Rate && <>{formatNumber(row.v0Rate)} </>}
                              </TableCell>
                              {/* <TableCell
                                key={index + row.vTotal}
                                align='center'
                                style={{
                                  width: 'auto',
                                  position:  'sticky',
                                  background: 'white',
                                  borderBottom: row.bold
                                    ? '.5px solid lightgray'
                                    : 0,
                                  borderTop: row.bold
                                    ? '0.5px solid #0083FC'
                                    : 0,
                                  color: row.bold ? '#0083FC' : 'black',
                                  fontWeight: row.bold ? 'bold' : 'normal',
                                  fontSize: row.title && '20px',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {row.vTotal}
                              </TableCell> */}
                            </>
                          ) : (
                            <TableCell
                              key={index + row.v0}
                              align={index > 0 ? 'center' : 'left'}
                              style={{
                                width: 'auto',
                                background: 'white',
                                borderBottom: row.bold
                                  ? '.5px solid lightgray'
                                  : 0,
                                borderTop: row.bold ? '0.5px solid #0083FC' : 0,
                                // eslint-disable-next-line no-nested-ternary
                                color: row.color
                                  ? row[`v${index}`] < 0
                                    ? '#ff0000'
                                    : '#10793F'
                                  : '',
                                fontWeight: row.bold ? 'bold' : 'normal',
                                fontSize: row.title && '20px',
                                textTransform: 'capitalize',
                              }}
                            >
                              {formatNumber(row[`v${index}`])}
                            </TableCell>
                          ),
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Paper>
      ) : (
        <Skeleton animation="wave" count={6} height={100} />
      )}
    </Grid>
  );
};

export default BreakdownTable;
