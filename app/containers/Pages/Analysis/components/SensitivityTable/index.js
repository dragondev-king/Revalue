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

const SensitivityTable = ({ props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sensitivityTableContainer}>
      <Typography className={classes.sectionTitle}>
        {props.intl.formatMessage({
          ...messages.sensitivityTable,
        })}
      </Typography>
      <TableContainer
        component={Paper}
        style={{ marginTop: '16px', padding: '16px 16px' }}
      >
        <Table className={classes.table} aria-label="senstivty table">
          <TableHead>
            <TableRow>
              <TableCell
                rowSpan={2}
                colSpan={2}
                style={{
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  verticalAlign: 'initial',
                  fontSize: '16px',
                }}
              >
                Estimated Profit
              </TableCell>
              <TableCell
                align="center"
                colSpan={5}
                style={{
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                Acquistion Price
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                100 000
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                125 000
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                150 000
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                175 000
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                200 000
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                rowSpan={5}
                style={{
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  verticalAlign: 'initial',
                  fontSize: '16px',
                }}
              >
                Exit Price
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                270 750
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                123456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                213456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                321456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                432156
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                543216
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                270 750
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                123456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                213456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                321456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                432156
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                543216
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                270 750
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#CDE7FF' }}
              >
                123456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                213456
              </TableCell>
              <TableCell
                align="right"
                style={{
                  border: '2px solid white',
                  background: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                }}
              >
                321456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                432156
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  border: '2px solid white',
                  background: '#41A4FF',
                  color: 'white',
                }}
              >
                543216
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                270 750
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                123456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                213456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                321456
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  border: '2px solid white',
                  background: '#41A4FF',
                  color: 'white',
                }}
              >
                432156
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  border: '2px solid white',
                  background: '#0062BC',
                  color: 'white',
                }}
              >
                543216
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="right"
                variant="head"
                style={{
                  background: '#F1F1F1',
                  border: '2px solid #E9F2FB',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                  color: '#565853',
                }}
              >
                270 750
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                123456
              </TableCell>
              <TableCell
                align="right"
                style={{ border: '2px solid white', background: '#8DC8FF' }}
              >
                213456
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  border: '2px solid white',
                  background: '#41A4FF',
                  color: 'white',
                }}
              >
                321456
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  border: '2px solid white',
                  background: '#0062BC',
                  color: 'white',
                }}
              >
                432156
              </TableCell>
              <TableCell
                align="right"
                variant="head"
                style={{
                  border: '2px solid white',
                  background: '#0062BC',
                  color: 'white',
                }}
              >
                543216
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SensitivityTable;
