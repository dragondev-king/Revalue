/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import { BackNextButtons } from '../components/BackNextButtons';
import messages from '../messages';

const Rent = props => (
  <>
    <Grid item container>
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
          <Grid item container spacing={6} className="mt-20">
            <Grid item xs={6}>
              <CustomInput
                error={props.errors.propertyManagerRate}
                name="propertyManagerRate"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.propertyManagerRate}
                symbol={<span>&#8364;</span>}
                labelText={props.intl.formatMessage({
                  ...messages.propertyManagerRate,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.propertyManagerRateInfo,
                })}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={6} className="mt-20">
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
          <Grid item container spacing={6} className="mt-20">
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
        </>
      )}
    </Grid>
    <div className={props.classes.buttonContainer}>
      <BackNextButtons
        onBackClick={props.onBackClick}
        onNextClick={props.onNextClick}
      />
    </div>
  </>
);

export default Rent;
