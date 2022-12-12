/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import CustomSlider from 'components/CustomSlider';
import { BackNextButtons } from '../components/BackNextButtons';
import messages from '../messages';

export const Proposal = props => {
  const validationSchema = yup.object().shape({
    bidAskRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    acquisitionBrokerRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    acquisitionStampDutyRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    landRegistryInscription: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
  });

  const handleNextClick = useCallback(() => {
    validationSchema
      .validate(props.inputs, {
        abortEarly: false,
      })
      .then(() => {
        props.onNextClick();
      })
      .catch(error => {
        if (error.inner && error.inner.length > 0) {
          error.inner.forEach(item => {
            props.setInputError(
              item.path,
              props.intl.formatMessage({
                ...messages[item.message],
              }),
            );
          });
        }
      });
  }, [validationSchema]);

  return (
    <>
      <Grid container item>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={8}>
            <CustomSlider
              error={props.errors.bidAskRate}
              labelText={`${props.intl.formatMessage({
                ...messages.bidAskRate,
              })} *`}
              value={props.inputs.bidAskRate}
              tooltipText={props.intl.formatMessage({
                ...messages.bidAskRateInfo,
              })}
              defaultValue={props.inputs.bidAskRate}
              name="bidAskRate"
              handleChange={props.handleSliderChange}
              disabled={false}
              unit="%"
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
      <div className={props.classes.buttonContainer}>
        <BackNextButtons
          onBackClick={props.onBackClick}
          onNextClick={handleNextClick}
        />
      </div>
    </>
  );
};

export default Proposal;
