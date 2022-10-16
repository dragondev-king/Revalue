import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import { DropdownIcon, InfoIcon } from '../SvgIconComponents';

const useStyles = makeStyles({
  inputLabel: {
    color: '#31342B',
    fontSize: '16px',
    top: '-16px',
  },
  select: {
    border: '1px solid #0083FC',
    borderRadius: '4px',
    padding: '0 10px',
    color: '#7C7C7C',
    background: '#FFFFFF',
  },
  disabledSelect: {
    border: '1px solid #7C7C7C',
    borderRadius: '4px',
    padding: '0 10px',
    color: '#7C7C7C',
    background: '#FFFFFF',
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

const CustomSelect = ({
  error,
  defaultValue,
  data,
  handleChange,
  value,
  labelText,
  tooltipText,
  name,
  disabled = false,
}) => {
  const styles = useStyles();
  return (
    <FormControl
      variant="standard"
      className={`${styles.formControl} w-100`}
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
      <Select
        disabled={disabled}
        disableUnderline
        defaultValue={defaultValue}
        name={name}
        value={value}
        onChange={handleChange}
        className={disabled ? styles.disabledSelect : styles.select}
        IconComponent={() => (disabled ? <></> : <DropdownIcon />)}
      >
        {data.map(item => (
          <MenuItem key={item.name} value={item.name}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
