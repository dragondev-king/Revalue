/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomInput from 'components/CustomInput';
import CustomSelect from 'components/CustomSelect';

import messages from '../messages';

const Sale = props => {
  console.log('Sale');
  return (
    <Grid container item>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.timeToSale}
            name="timeToSale"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.timeToSale}
            symbol={<span>Month</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.timeToSale,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.timeToSaleInfo,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomSelect
            error={null}
            defaultValue={props.inputs.percentile}
            handleChange={props.handleChange}
            data={props.percentiles}
            name="percentile"
            tooltipText={props.intl.formatMessage({
              ...messages.percentileInfo,
            })}
            labelText={`${props.intl.formatMessage({
              ...messages.percentile,
            })} *`}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.housePriceIndexRate}
            name="housePriceIndexRate"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.housePriceIndexRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.housePriceIndexRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.housePriceIndexRateInfo,
            })}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.exitBrokerRate}
            name="exitBrokerRate"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.exitBrokerRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.exitBrokerRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.exitBrokerRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.exitBrokerRateVat}
            name="exitBrokerRateVat"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.exitBrokerRateVat}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.exitBrokerRateVat,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.exitBrokerRateVatInfo,
            })}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sale;
