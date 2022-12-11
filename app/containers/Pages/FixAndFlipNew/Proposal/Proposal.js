/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';

import messages from '../messages';

export const Proposal = props => {
  console.log('kkkkkk');
  return (
    <Grid container item>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.bidAskRate}
            name="bidAskRate"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.bidAskRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.bidAskRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.bidAskRateInfo,
            })}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={4}>
          <CustomSwitch
            defaultValue={props.inputs.realEstateTransferTax}
            handleChange={props.handleChangeSwitch}
            checked={props.inputs.realEstateTransferTax}
            color="primary"
            name="realEstateTransferTax"
            labelText={`${props.intl.formatMessage({
              ...messages.realEstateTransferTax,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.realEstateTransferTaxInfo,
            })}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.acquisitionBrokerRate}
            name="acquisitionBrokerRate"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.acquisitionBrokerRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.acquisitionBrokerRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.acquisitionBrokerRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.acquisitionBrokerRateVat}
            name="acquisitionBrokerRateVat"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.acquisitionBrokerRateVat}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.acquisitionBrokerRateVat,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.acquisitionBrokerRateVatInfo,
            })}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.acquisitionStampDutyRate}
            name="acquisitionStampDutyRate"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.acquisitionStampDutyRate}
            symbol={<span>%</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.acquisitionStampDutyRate,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.acquisitionStampDutyRateInfo,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomInput
            error={props.errors.landRegistryInscription}
            name="landRegistryInscription"
            type="number"
            handleChange={props.handleChange}
            defaultValue={props.inputs.landRegistryInscription}
            symbol={<span>&#8364;</span>}
            labelText={`${props.intl.formatMessage({
              ...messages.landRegistryInscription,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.landRegistryInscriptionInfo,
            })}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Proposal;
