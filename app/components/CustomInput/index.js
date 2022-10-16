import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import { InfoIcon } from '../SvgIconComponents';

const useStyles = makeStyles({
  inputLabel: {
    color: '#31342B',
    fontSize: '16px',
    top: '-16px',
  },
  input: {
    border: '1px solid #0083FC', // #7C7C7C
    borderRadius: '4px',
    color: '#7C7C7C',
    paddingRight: '5px',
    background: '#FFFFFF',
  },
  disabledInput: {
    border: '1px solid #7C7C7C',
    borderRadius: '4px',
    color: '#7C7C7C',
    paddingRight: '5px',
    background: '#FFFFFF',
  },
  inputAdornment: {
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
});

const CustomInput = ({
  error,
  labelText,
  value,
  tooltipText,
  defaultValue,
  readOnly,
  type,
  name,
  handleChange,
  symbol,
  disabled = false,
}) => {
  const styles = useStyles();
  return (
    <FormControl variant="standard" className="w-100" error={!!error}>
      <InputLabel
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
      <Input
        id={name}
        disabled={disabled}
        disableUnderline
        readOnly={readOnly}
        value={value}
        className={disabled ? styles.disabledInput : styles.input}
        onChange={handleChange}
        type={type}
        defaultValue={defaultValue}
        name={name}
        startAdornment={
          <InputAdornment
            position="start"
            className={
              disabled ? styles.disabledAdornment : styles.inputAdornment
            }
          >
            {symbol}
          </InputAdornment>
        }
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
