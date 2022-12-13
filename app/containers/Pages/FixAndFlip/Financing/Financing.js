/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import CustomSlider from 'components/CustomSlider';
import { BackNextButtons } from '../components/BackNextButtons';
import { HideAdvanceOptions } from '../components/HideAdvanceOptions';

import messages from '../messages';

const Financing = props => {
  const validationSchema = yup.object().shape({
    financingRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    interestRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    amortization: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    multiRiskInsurance: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    lifeInsurance: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    bankCommissionRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    loanEarlyRepaymentRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    mortgageStampDutyRate: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable()
      .required('inputRequired'),
    interestStampDutyRate: yup
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
            ...messages.financingDescription,
          })}
        </span>
        <Grid item container spacing={6} className="mt-20">
          <Grid item xs={6}>
            <CustomSwitch
              defaultValue={props.inputs.financing}
              handleChange={props.handleChangeSwitch}
              checked={props.inputs.financing}
              color="primary"
              name="financing"
              labelText={`${props.intl.formatMessage({
                ...messages.financing,
              })} *`}
              tooltipText={props.intl.formatMessage({
                ...messages.financing,
              })}
            />
          </Grid>
        </Grid>
        {props.inputs.financing && (
          <>
            <Grid item container spacing={6} className="mt-20">
              <Grid item xs={6}>
                <CustomSlider
                  error={props.errors.financingRate}
                  labelText={`${props.intl.formatMessage({
                    ...messages.financingRate,
                  })} *`}
                  value={props.inputs.financingRate}
                  tooltipText={props.intl.formatMessage({
                    ...messages.financingRateInfo,
                  })}
                  defaultValue={props.inputs.financingRate}
                  name="financingRate"
                  handleChange={props.handleSliderChange}
                  disabled={false}
                  unit="%"
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSlider
                  error={props.errors.interestRate}
                  labelText={`${props.intl.formatMessage({
                    ...messages.interestRate,
                  })} *`}
                  value={props.inputs.interestRate}
                  tooltipText={props.intl.formatMessage({
                    ...messages.interestRateInfo,
                  })}
                  defaultValue={props.inputs.interestRate}
                  name="interestRate"
                  handleChange={props.handleSliderChange}
                  disabled={false}
                  unit="%"
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSlider
                  error={props.errors.amortization}
                  labelText={`${props.intl.formatMessage({
                    ...messages.amortization,
                  })} *`}
                  value={props.inputs.amortization}
                  tooltipText={props.intl.formatMessage({
                    ...messages.amortizationInfo,
                  })}
                  defaultValue={props.inputs.amortization}
                  name="amortization"
                  handleChange={props.handleSliderChange}
                  disabled={false}
                  unit=" Years"
                  max={40}
                />
              </Grid>
            </Grid>
            <HideAdvanceOptions {...props} stepName="financing">
              <Grid item container>
                <Grid item container spacing={3}>
                  <Grid item xs={12}>
                    <p>Estimate insurance costs</p>
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.multiRiskInsurance}
                      name="multiRiskInsurance"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.multiRiskInsurance}
                      symbol={<span>&#8364;</span>}
                      labelText={props.intl.formatMessage({
                        ...messages.multiRiskInsurance,
                      })}
                      tooltipText={props.intl.formatMessage({
                        ...messages.multiRiskInsuranceInfo,
                      })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.lifeInsurance}
                      name="lifeInsurance"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.lifeInsurance}
                      symbol={<span>&#8364;</span>}
                      labelText={props.intl.formatMessage({
                        ...messages.lifeInsurance,
                      })}
                      tooltipText={props.intl.formatMessage({
                        ...messages.lifeInsuranceInfo,
                      })}
                    />
                  </Grid>
                </Grid>
                <Grid item container spacing={3}>
                  <Grid item xs={12}>
                    <p>Estimate your financing costs</p>
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.bankCommissionRate}
                      name="bankCommissionRate"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.bankCommissionRate}
                      symbol={<span>%</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.bankCommissionRate,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.bankCommissionRateInfo,
                      })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.loanEarlyRepaymentRate}
                      name="loanEarlyRepaymentRate"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.loanEarlyRepaymentRate}
                      symbol={<span>%</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.loanEarlyRepaymentRate,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.loanEarlyRepaymentRateInfo,
                      })}
                    />
                  </Grid>
                </Grid>
                <Grid item container spacing={3} className="mt-10">
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.mortgageStampDutyRate}
                      name="mortgageStampDutyRate"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.mortgageStampDutyRate}
                      symbol={<span>%</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.mortgageStampDutyRate,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.mortgageStampDutyRateInfo,
                      })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      error={props.errors.interestStampDutyRate}
                      name="interestStampDutyRate"
                      type="number"
                      handleChange={props.handleChange}
                      defaultValue={props.inputs.interestStampDutyRate}
                      symbol={<span>%</span>}
                      labelText={`${props.intl.formatMessage({
                        ...messages.interestStampDutyRate,
                      })} *`}
                      tooltipText={props.intl.formatMessage({
                        ...messages.interestStampDutyRateInfo,
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

export default Financing;
