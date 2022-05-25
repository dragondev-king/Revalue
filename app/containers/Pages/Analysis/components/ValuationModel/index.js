/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import messages from '../../messages';

const ValuationModel = ({ props }) => {
  console.log(props);
  return (
    <Grid item container spacing={4} className="mt-10 p-10">
      {!props.isGettingAnalysisById ? (
        <>
          <Grid item xs={12} className="mb-5 mt-10">
            <Typography variant="h6">
              {props.intl.formatMessage({
                ...messages.valuationModel,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.floorRate,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.cap,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.percentile,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.propertyStatus,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.parish,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.soldUnits,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.forSale,
              })}
            </Typography>
          </Grid>
          <Grid item xs={3} className="mb-5 mt-5">
            <Typography variant="p">
              {props.intl.formatMessage({
                ...messages.timeToSale,
              })}
            </Typography>
          </Grid>
        </>
      ) : (
        <Skeleton count={1} height={400} />
      )}
    </Grid>
  );
};
export default ValuationModel;
