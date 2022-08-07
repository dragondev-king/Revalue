import React from 'react';
import PaperMap from 'components/PaperMap';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import messages from '../../messages';
import { useStyles } from '../../styles';

const SalesActivityHistory = ({ props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.salesActivityHistoryContainer}>
      <Typography className={classes.sectionTitle}>
        {props.intl.formatMessage({
          ...messages.salesActivityHistory,
        })}
      </Typography>
      <Paper className="mt-20">
        <Grid container direction="row">
          <Grid item xs={6} className="p-20" style={{ height: '400px' }}>
            <PaperMap />
          </Grid>
          <Grid item xs={6} className="p-20" style={{ height: '400px' }}>
            <PaperMap />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SalesActivityHistory;
