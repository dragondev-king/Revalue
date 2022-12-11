/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import { BackNextButtons } from '../components/BackNextButtons';

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
                <CustomInput
                  error={props.errors.financingRate}
                  name="financingRate"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.financingRate}
                  symbol={<span>%</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.financingRate,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.financingRateInfo,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.interestRate}
                  name="interestRate"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.interestRate}
                  symbol={<span>%</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.interestRate,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.interestRateInfo,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.amortization}
                  name="amortization"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.amortization}
                  symbol={
                    <span>
                      {props.intl.formatMessage({ ...messages.year })}
                    </span>
                  }
                  labelText={`${props.intl.formatMessage({
                    ...messages.amortization,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.amortizationInfo,
                  })}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={6} className="mt-20">
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
            <Grid item container spacing={6} className="mt-20">
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
            <Grid item container spacing={6} className="mt-20">
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
