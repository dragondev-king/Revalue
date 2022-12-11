/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomInput from 'components/CustomInput';
import { BackNextButtons } from '../components/BackNextButtons';

import messages from '../messages';

const Capital = props => (
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
        onNextClick={props.onNextClick}
      />
    </div>
  </>
);

export default Capital;
