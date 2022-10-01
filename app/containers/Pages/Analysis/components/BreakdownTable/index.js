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
import { Grid } from '@material-ui/core';
import Scrollbar from 'react-perfect-scrollbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from '../../styles';
import messages from './messages';
import { InfoIcon } from '../../../../../components/SvgIconComponents';

const BreakdownTable = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid>
      {!props.isGettingAnalysisById ? (
        <Paper className={classes.breakdownTablePaper}>
          <Scrollbar
            className="scrollable position-relative"
            style={{ maxHeight: '800px', minWidth: '400px' }}
          >
            <TableContainer style={{ overflow: 'unset' }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow key="tableHeader">
                    {props.analysis &&
                      props.analysis.breakdownTable &&
                      props.analysis.breakdownTable.columns &&
                      props.analysis.breakdownTable.columns.map(
                        (column, index) => (
                          <TableCell
                            key={index}
                            align="center"
                            style={{
                              fontWeight: 'bold',
                              zIndex: index === 0 && 3,
                              width: index === 0 ? '300px' : 'auto',
                              minWidth: index === 0 ? '300px' : '100px',
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
                        {Object.entries(row).map((rowInfo, index) => (
                          <TableCell
                            key={index + row.v0}
                            align={index > 0 ? 'center' : 'left'}
                            style={{
                              width: index === 0 ? '300px' : 'auto',
                              position: index === 0 && 'sticky',
                              left: index === 0 && 0,
                              background: 'white',
                              borderBottom: row.bold
                                ? '.5px solid lightgray'
                                : 0,
                              borderTop: row.bold ? '0.5px solid #0083FC' : 0,
                              color: row.bold ? '#0083FC' : 'black',
                              fontWeight: row.bold ? 'bold' : 'normal',
                              fontSize: row.title && '20px',
                              textTransform: 'capitalize',
                            }}
                          >
                            {index === 0 ? (
                              <>
                                {props.intl.formatMessage({
                                  ...messages[row.v0],
                                })}
                                {!row.title && (
                                  <Tooltip
                                    title={props.intl.formatMessage({
                                      ...messages[`${row.v0}Info`],
                                    })}
                                  >
                                    <IconButton className={classes.iconButton}>
                                      <InfoIcon />
                                    </IconButton>
                                  </Tooltip>
                                )}
                              </>
                            ) : (
                              formatNumber(row[`v${index}`])
                            )}
                          </TableCell>
                        ))}
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
