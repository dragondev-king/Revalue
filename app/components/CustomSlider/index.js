import React, { useCallback } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import { InfoIcon } from '../SvgIconComponents';

const useStyles = makeStyles({
  sliderLabel: {
    color: '#31342B',
    fontSize: '16px',
    top: '-16px',
  },
  slider: {
    border: '1px solid #0083FC', // #7C7C7C
    borderRadius: '4px',
    color: '#7C7C7C',
    paddingRight: '5px',
    background: '#FFFFFF',
  },
  disabledSlider: {
    border: '1px solid #7C7C7C',
    borderRadius: '4px',
    color: '#7C7C7C',
    paddingRight: '5px',
    background: '#FFFFFF',
  },
  sliderAdornment: {
    background: '#C3E3FF',
    height: '2.1em',
    maxHeight: '2.1em',
    borderRadius: '3px 0 0 3px',
    padding: '0 10px',
    '& p': {
      color: '#31342B',
      fontSize: '16px',
    },
  },
  disabledAdornment: {
    background: '#F1F1F1',
    height: '2.1em',
    maxHeight: '2.1em',
    borderRadius: '3px 0 0 3px',
    padding: '0 10px',
    '& p': {
      color: '#31342B',
      fontSize: '16px',
    },
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
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sliderValueLabel: {
    width: '40px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '4px 1px',
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
  valueLabelFormat,
}) => {
  const styles = useStyles();
  const handleSliderChange = useCallback((event, val) => {
    handleChange(name, val);
  }, []);

  return (
    <FormControl variant="standard" className="w-100" error={!!error}>
      <label
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
      </label>
      <div className={styles.sliderContainer}>
        <Slider
          id={name}
          color="primary"
          disabled={disabled}
          value={value}
          step={step}
          min={min}
          max={max}
          className={disabled ? styles.disabledSlider : styles.slider}
          onChange={handleSliderChange}
          defaultValue={defaultValue}
          name={name}
          valueLabelFormat={valueLabelFormat}
        />
        <p className={styles.sliderValueLabel}>{`${value}%`}</p>
      </div>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomSlider;
