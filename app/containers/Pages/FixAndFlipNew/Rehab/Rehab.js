/* eslint-disable react/no-array-index-key */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import { BackNextButtons } from '../components/BackNextButtons';

import messages from '../messages';

const Rehab = props => (
  <>
    <Grid container item>
      <Grid item container spacing={6} className="mt-20">
        <Grid item xs={6}>
          <CustomSwitch
            defaultValue={props.inputs.rehab}
            handleChange={props.handleChangeSwitch}
            checked={props.inputs.rehab}
            color="primary"
            name="rehab"
            labelText={`${props.intl.formatMessage({
              ...messages.rehab,
            })} *`}
            tooltipText={props.intl.formatMessage({
              ...messages.rehabInfo,
            })}
          />
        </Grid>
      </Grid>
      {props.inputs.rehab && (
        <>
          <Grid item container spacing={6} className="mt-20">
            <Grid item xs={4}>
              <CustomInput
                error={props.errors.rehabPricePerSquareMeter}
                name="rehabPricePerSquareMeter"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.rehabPricePerSquareMeter}
                symbol={<span>€ / m²</span>}
                labelText={props.intl.formatMessage({
                  ...messages.rehabPricePerSquareMeter,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.rehabPricePerSquareMeterInfo,
                })}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomInput
                error={props.errors.rehabFinancingRate}
                name="rehabFinancingRate"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.rehabFinancingRate}
                symbol={<span>%</span>}
                labelText={`${props.intl.formatMessage({
                  ...messages.rehabFinancingRate,
                })}`}
                tooltipText={props.intl.formatMessage({
                  ...messages.rehabFinancingRate,
                })}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomInput
                error={props.errors.rehabVat}
                name="rehabVat"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.rehabVat}
                symbol={<span>€ / m²</span>}
                labelText={props.intl.formatMessage({
                  ...messages.rehabVat,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.rehabVatInfo,
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

export default Rehab;
