/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import SearchIcon from '@material-ui/icons/Search';
import * as yup from 'yup';

import AutoComplete from 'components/AutoComplete';
import Map from 'containers/Map';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInput';
import { BackNextButtons } from '../components/BackNextButtons';

import messages from '../messages';

const Property = props => {
  const validationSchema = yup.object().shape({
    propertyLocation: yup
      .string()
      .nullable()
      .required('inputRequired'),
    minAskingPrice: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxAskingPrice: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    minUsefulArea: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
    maxUsefulArea: yup
      .number()
      .transform(v => (v === '' || Number.isNaN(v) ? null : v))
      .nullable(),
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
      <Grid item container direction="column">
        <div className={props.classes.locationMapContainer}>
          <div className={props.classes.locationContainer}>
            <Grid container direction="column" justifyContent="flex-start">
              <Grid item container spacing={3}>
                <Grid item xs={12} className="mb-10">
                  <FormControl
                    variant="standard"
                    className="w-100"
                    error={!!props.errors.propertyLocation}
                  >
                    <AutoComplete
                      value={props.inputs.propertyLocation}
                      onChange={(event, newValue) => {
                        props.setPropertyLocation(newValue);
                        props.setInputError('propertyLocation', '');
                        props.setAnalyzeButtonDisabled(false);
                      }}
                      error={!!props.errors.propertyLocation}
                      name="propertyLocation"
                      defaultValue={props.inputs.propertyLocation}
                      options={props.propertyLocations}
                      label={props.intl.formatMessage({
                        ...messages.propertyLocation,
                      })}
                      popupIcon={
                        <SearchIcon className={props.classes.searchIcon} />
                      }
                      renderOption={(option, value) => {
                        const matches = match(option, value.inputValue);
                        const parts = parse(option, matches);
                        return (
                          <div>
                            {parts.map((part, index) => (
                              <span
                                key={index}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            ))}
                          </div>
                        );
                      }}
                    />
                    <FormHelperText>
                      {props.errors.propertyLocation}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <Map propertyLocation={props.inputs.propertyLocation} />
        </div>
        <Grid item container spacing={3} className="mt-20">
          <Grid item container spacing={3}>
            <Grid item xs={6}>
              <CustomSelect
                error={props.errors.propertyCondition}
                defaultValue={props.inputs.propertyCondition}
                value={props.inputs.propertyCondition}
                handleChange={props.handleChange}
                data={props.propertyConditions}
                name="propertyCondition"
                tooltipText={props.intl.formatMessage({
                  ...messages.propertyConditionInfo,
                })}
                labelText={`${props.intl.formatMessage({
                  ...messages.propertyCondition,
                })} *`}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSelect
                error={props.errors.propertyType}
                value={props.inputs.propertyType}
                defaultValue={props.inputs.propertyType}
                handleChange={props.handleChange}
                data={props.propertyTypes}
                name="propertyType"
                tooltipText={props.intl.formatMessage({
                  ...messages.propertyTypeInfo,
                })}
                labelText={`${props.intl.formatMessage({
                  ...messages.propertyType,
                })} *`}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSelect
                error={props.errors.propertyTypology}
                value={props.inputs.propertyTypology}
                defaultValue={props.inputs.propertyTypology}
                handleChange={props.handleChange}
                data={props.propertyTypologies}
                name="propertyTypology"
                tooltipText={props.intl.formatMessage({
                  ...messages.propertyTypologyInfo,
                })}
                labelText={`${props.intl.formatMessage({
                  ...messages.propertyTypology,
                })} *`}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs={6}>
              <CustomInput
                error={props.errors.minAskingPrice}
                name="minAskingPrice"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.minAskingPrice}
                symbol={<span>&#8364;</span>}
                labelText={props.intl.formatMessage({
                  ...messages.minAskingPrice,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.minAskingPrice,
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                error={props.errors.maxAskingPrice}
                name="maxAskingPrice"
                type="number"
                handleChange={props.handleChange}
                defaultValue={props.inputs.maxAskingPrice}
                symbol={<span>&#8364;</span>}
                labelText={props.intl.formatMessage({
                  ...messages.maxAskingPrice,
                })}
                tooltipText={props.intl.formatMessage({
                  ...messages.maxAskingPrice,
                })}
              />
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.minUsefulArea}
                  name="minUsefulArea"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.minUsefulArea}
                  symbol={<span>m²</span>}
                  labelText={props.intl.formatMessage({
                    ...messages.minUsefulArea,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.minUsefulArea,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomInput
                  error={props.errors.maxUsefulArea}
                  name="maxUsefulArea"
                  type="number"
                  handleChange={props.handleChange}
                  defaultValue={props.inputs.maxUsefulArea}
                  symbol={<span>m²</span>}
                  labelText={props.intl.formatMessage({
                    ...messages.maxUsefulArea,
                  })}
                  tooltipText={props.intl.formatMessage({
                    ...messages.maxUsefulArea,
                  })}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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

export default Property;
