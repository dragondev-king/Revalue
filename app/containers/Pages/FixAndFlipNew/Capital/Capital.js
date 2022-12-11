/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import { BackNextButtons } from '../components/BackNextButtons';

import messages from '../messages';

const Capital = props => {
  const validationSchema = yup.object().shape({
    minProfit: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    minRequiredCapital: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxRequiredCapital: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
  });

  const handleSubmit = useCallback(() => {
    validationSchema
      .validate(props.inputs, {
        abortEarly: false,
      })
      .then(() => {
        props.onSubmit();
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
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.minProfit}
              name="minProfit"
              type="number"
              handleChange={props.handleChange}
              defaultValue={props.inputs.minProfit}
              symbol={<span>&#8364;</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.minProfit,
              })}`}
              tooltipText={props.intl.formatMessage({
                ...messages.minProfitInfo,
              })}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.minRequiredCapital}
              name="minRequiredCapital"
              type="number"
              handleChange={props.handleChange}
              defaultValue={props.inputs.minRequiredCapital}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.minRequiredCapital,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.minRequiredCapitalInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.maxRequiredCapital}
              name="maxRequiredCapital"
              type="number"
              handleChange={props.handleChange}
              defaultValue={props.inputs.maxRequiredCapital}
              symbol={<span>&#8364;</span>}
              labelText={props.intl.formatMessage({
                ...messages.maxRequiredCapital,
              })}
              tooltipText={props.intl.formatMessage({
                ...messages.maxRequiredCapitalInfo,
              })}
            />
          </Grid>
        </Grid>
      </Grid>
      <div className={props.classes.buttonContainer}>
        <BackNextButtons
          onBackClick={props.onBackClick}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Capital;
