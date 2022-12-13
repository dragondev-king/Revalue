/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import { BackNextButtons } from '../components/BackNextButtons';
import { HideAdvanceOptions } from '../components/HideAdvanceOptions';
import messages from '../messages';

const Rent = props => {
  const validationSchema = yup.object().shape({});

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
      <Grid item container>
        <span className={props.classes.stepPageDescription}>
          {props.intl.formatMessage({
            ...messages.rentDescription,
          })}
        </span>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={6}>
            <CustomSwitch
              defaultValue={props.inputs.rent}
              handleChange={props.handleChangeSwitch}
              checked={props.inputs.rent}
              color="primary"
              name="rent"
              labelText={`${props.intl.formatMessage({
                ...messages.rent,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.rentInfo,
              })}
            />
          </Grid>
        </Grid>
        {props.inputs.rent && (
          <>
            <Grid item container spacing={6} className="mt-20">
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.timeToRent}
                  name="timeToRent"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.timeToRent}
                  symbol={<span>&#8364;</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.timeToRent,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.timeToRentInfo,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.contractPeriod}
                  name="contractPeriod"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.contractPeriod}
                  symbol={<span>&#8364;</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.contractPeriod,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.contractPeriodInfo,
                  })}
                />
              </Grid>
            </Grid>
            <HideAdvanceOptions {...props} stepName="rent">
              <Grid item container>
                <Grid item container spacing={1}>
                  <Grid item xs={12}>
                    <p>Are you going to use a Broker to lease the Proerty?</p>
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.rentBrokerFee}
                      name="rentBrokerFee"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.rentBrokerFee}
                      symbol={<span>&#8364;</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.rentBrokerFee,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.rentBrokerFeeInfo,
                      })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.rentBrokerFeeVat}
                      name="rentBrokerFeeVat"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.rentBrokerFeeVat}
                      symbol={<span>&#8364;</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.rentBrokerFeeVat,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.rentBrokerFeeVatInfo,
                      })}
                    />
                  </Grid>
                </Grid>
                <Grid item container spacing={1}>
                  <Grid item xs={12}>
                    <p>Taxes associated with properly leasing</p>
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.rentStampDutyRate}
                      name="rentStampDutyRate"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.rentStampDutyRate}
                      symbol={<span>&#8364;</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.rentStampDutyRate,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.rentStampDutyRateInfo,
                      })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.rentTaxRate}
                      name="rentTaxRate"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.rentTaxRate}
                      symbol={<span>&#8364;</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.rentTaxRate,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.rentTaxRateInfo,
                      })}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </HideAdvanceOptions>
          </>
        )}
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

export default Rent;
