import React, { useCallback } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

import { InfoIcon } from '../SvgIconComponents';

const useStyles = makeStyles({
  inputLabel: {
    color: '#31342B',
    fontSize: '16px',
    top: '-25px',
  },
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    right: '22px !important',
    bottom: '0px',
  },
  labelShrunk: {
    right: 'unset',
  },
  sliderContainer: {
    width: '100%',
    padding: '0',
    marginTop: '-20px',
  },
  sliderWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    height: '12px',
    marginTop: '15px',
  },
  sliderValueLabel: {
    width: '75px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '4px 1px',
    textAlign: 'center',
  },
});

const CustomSlider = ({
  error,
  labelText,
  value,
  tooltipText,
  defaultValue,
  name,
  handleChange,
  disabled = false,
  min,
  max,
  step,
  unit,
}) => {
  const styles = useStyles();
  const handleSliderChange = useCallback((event, val) => {
    handleChange(name, val);
  }, []);

  return (
    <FormControl
      variant="standard"
      className={styles.sliderContainer}
      error={!!error}
    >
      <InputLabel
        shrink
        className={styles.inputLabel}
        classes={{
          root: styles.label,
          shrink: styles.labelShrunk,
        }}
      >
        {labelText}
        <Tooltip
          title={
            <Typography variant="body1" className="text-white">
              {tooltipText}
            </Typography>
          }
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </InputLabel>
      <div className={styles.sliderWrapper}>
        <Slider
          id={name}
          color="primary"
          disabled={disabled}
          value={value}
          step={step}
          min={min}
          max={max}
          onChange={handleSliderChange}
          defaultValue={defaultValue}
          name={name}
        />
        <p className={styles.sliderValueLabel}>{`${value}${unit}`}</p>
      </div>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomSlider;
