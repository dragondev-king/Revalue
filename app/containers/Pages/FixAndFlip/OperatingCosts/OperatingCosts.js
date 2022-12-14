/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import { BackNextButtons } from '../components/BackNextButtons';
import { HideAdvanceOptions } from '../components/HideAdvanceOptions';

import messages from '../messages';

const OperatingCosts = props => {
  const validationSchema = yup.object().shape({
    condominiumCosts: yup
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
        <span className={props.classes.stepPageDescription}>
          {props.intl.formatMessage({
            ...messages.operatingCostsDescription,
          })}
        </span>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={6}>
            <CustomInput
              error={props.errors.condominiumCosts}
              name="condominiumCosts"
              type="number"
              handleChange={props.handleChange}
              defaultValue={props.inputs.condominiumCosts}
              symbol={<span>&#8364;</span>}
              labelText={`${props.intl.formatMessage({
                ...messages.condominiumCosts,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.condominiumCostsInfo,
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomSwitch
              handleChange={props.handleChangeSwitch}
              checked={props.inputs.propertyTax}
              name="propertyTax"
              labelText={`${props.intl.formatMessage({
                ...messages.propertyTax,
              })} *`}
            />
          </Grid>
        </Grid>
        <HideAdvanceOptions {...props} stepName="operatingCosts">
          <Grid item container spacing={6}>
            <Grid item container spacing={6}>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.maintenanceCosts}
                  name="maintenanceCosts"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.maintenanceCosts}
                  symbol={<span>&#8364;</span>}
                  labelText={props.intl.formatMessage({
                    ...messages.maintenanceCosts,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.maintenanceCostsInfo,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.otherOperatingCosts}
                  name="otherOperatingCosts"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.otherOperatingCosts}
                  symbol={<span>&#8364;</span>}
                  labelText={props.intl.formatMessage({
                    ...messages.otherOperatingCosts,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.otherOperatingCostsInfo,
                  })}
                />
              </Grid>
            </Grid>
          </Grid>
        </HideAdvanceOptions>
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

export default OperatingCosts;
