/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';

import CustomInput from 'components/CustomInput';
import CustomSwitch from 'components/CustomSwitch';
import CustomSelect from 'components/CustomSelect';
import CustomSlider from 'components/CustomSlider';
import { BackNextButtons } from '../components/BackNextButtons';
import { HideAdvanceOptions } from '../components/HideAdvanceOptions';

import messages from '../messages';

const Tax = props => {
  const validationSchema = yup.object().shape({
    taxResidentInPortugal: yup
      .boolean()
      .nullable()
      .required('inputRequired'),
    capitalGainsTaxBaseRate: yup
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
            ...messages.taxDescription,
          })}
        </span>
        <Grid item container spacing={6} className="mt-20">
          <Grid
            item
            xs={!props.inputs.taxResidentInPortugal ? 4 : 12}
            className="py-0"
          >
            <CustomSwitch
              handleChange={props.handleChangeSwitch}
              checked={props.inputs.taxResidentInPortugal}
              name="taxResidentInPortugal"
              labelText={`${props.intl.formatMessage({
                ...messages.taxResidentInPortugal,
              })} *`}
            />
          </Grid>
          {!props.inputs.taxResidentInPortugal && (
            <>
              <Grid item xs={6}>
                <CustomInput
                  name="irsRate"
                  type="number"
                  readOnly
                  defaultValue={28}
                  symbol={<span>%</span>}
                  labelText={`${props.intl.formatMessage({
                    ...messages.irsRate,
                  })} *`}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsRate,
                  })}
                />
              </Grid>
            </>
          )}
          {props.inputs.taxResidentInPortugal && (
            <>
              <Grid item xs={6}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsCategory}
                  defaultValue={props.inputs.irsCategory}
                  handleChange={props.handleChange}
                  data={props.irsCategories}
                  name="irsCategory"
                  labelText={props.intl.formatMessage({
                    ...messages.irsCategory,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsCategory,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsCategoryRegion}
                  defaultValue={props.inputs.irsCategoryRegion}
                  name="irsCategoryRegion"
                  handleChange={props.handleChange}
                  data={props.irsCategoryRegions}
                  labelText={props.intl.formatMessage({
                    ...messages.irsCategoryRegion,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsCategoryRegion,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSelect
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.irsDependents}
                  name="irsDependents"
                  defaultValue={props.inputs.irsDependents}
                  handleChange={props.handleChange}
                  data={props.irsDependentsList}
                  labelText={props.intl.formatMessage({
                    ...messages.irsDependents,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.irsDependents,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  disabled={!props.inputs.taxResidentInPortugal}
                  error={props.errors.grossSalary}
                  name="grossSalary"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.grossSalary}
                  symbol={<span>€</span>}
                  labelText={props.intl.formatMessage({
                    ...messages.grossSalary,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.grossSalary,
                  })}
                />
              </Grid>
            </>
          )}
        </Grid>
        <HideAdvanceOptions {...props} stepName="tax">
          <Grid item container spacing={6}>
            <Grid item xs={6}>
              <CustomSelect
                error={null}
                defaultValue={props.inputs.acquisitionType}
                handleChange={props.handleChange}
                data={props.acquisitionTypes}
                name="acquisitionType"
                labelText={`${props.intl.formatMessage({
                  ...messages.acquisitionType,
                })} *`}
                tooltipText={props.intl.formatMessage({
                  ...messages.acquisitionTypeInfo,
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSlider
                error={props.errors.capitalGainsTaxBaseRate}
                labelText={`${props.intl.formatMessage({
                  ...messages.capitalGainsTaxBaseRate,
                })} *`}
                value={props.inputs.capitalGainsTaxBaseRate}
                tooltipText={props.intl.formatMessage({
                  ...messages.capitalGainsTaxBaseRateInfo,
                })}
                defaultValue={props.inputs.capitalGainsTaxBaseRate}
                name="capitalGainsTaxBaseRate"
                handleChange={props.handleSliderChange}
                disabled={false}
                unit="%"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                error={props.errors.rehabTaxRate}
                name="rehabTaxRate"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.rehabTaxRate}
                symbol={<span>&#8364;</span>}
                labelText={`${props.intl.formatMessage({
                  ...messages.rehabTaxRate,
                })} *`}
                tooltipText={props.intl.formatMessage({
                  ...messages.rehabTaxRateInfo,
                })}
              />
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

export default Tax;
