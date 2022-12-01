import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from 'containers/Pages/Analysis/styles';
import PaperChartLineComplex from 'components/PaperChartLineComplex';
import messages from 'containers/Pages/Analysis/messages';

const ForecastGraph = ({ props }) => {
  const classes = useStyles();

  return (
    <>
      {!props.isGettingAnalysisById ? (
        <>
          {props.analysis.charts && props.analysis.charts.length > 0 && (
            <Grid container direction="row" className="pt-sm-24" spacing={2}>
              <Grid item className={classes.gridPaper} xs={6}>
                <PaperChartLineComplex
                  measure={props.analysis.charts[0].measure}
                  data={props.analysis.charts[0].data}
                  title={props.analysis.charts[0].title}
                  actualLabel={props.intl.formatMessage({
                    ...messages.askingPrice,
                  })}
                  minLabel={props.intl.formatMessage({
                    ...messages.acquisitionPrice,
                  })}
                  maxLabel={props.intl.formatMessage({
                    ...messages.transactionPrice,
                  })}
                  min={props.analysis.acquisitionPricePerSquareMeter}
                  actual={props.analysis.askingPricePerSquareMeter}
                  max={props.analysis.overrideTransactionPricePerSquareMeter}
                  tooltip={props.analysis.charts[0].info}
                  current={props.analysis.percentile}
                />
              </Grid>
            </Grid>
          )}
        </>
      ) : (
        <Skeleton animation="wave" count={1} height={400} />
      )}
    </>
  );
};

export default ForecastGraph;
