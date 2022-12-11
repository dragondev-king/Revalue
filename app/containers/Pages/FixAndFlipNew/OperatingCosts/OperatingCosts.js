/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import { BackNextButtons } from '../components/BackNextButtons';

import messages from '../messages';

const OperatingCosts = props => (
  <>
    <Grid container item>
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
      <Grid item container spacing={6} className="mt-20">
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
    <div className={props.classes.buttonContainer}>
      <BackNextButtons
        onBackClick={props.onBackClick}
        onNextClick={props.onNextClick}
      />
    </div>
  </>
);

export default OperatingCosts;
