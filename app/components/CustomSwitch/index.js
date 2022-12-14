import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import { Typography } from '@material-ui/core';
import { InfoIcon } from '../SvgIconComponents';

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
    right: '25px !important',
    bottom: '0px',
  },
  labelShrunk: {
    right: 'unset',
  },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
  },
});

const CustomSwitch = ({
  error,
  labelText,
  tooltipText,
  defaultValue,
  name,
  handleChange,
  checked,
}) => {
  const styles = useStyles();
  return (
    <FormControl
      variant="standard"
      className={`${styles.formControl} w-100`}
      error={error}
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
      <div className={styles.switchContainer}>
        <span>No</span>
        <Switch
          className={styles.switch}
          defaultValue={defaultValue}
          onChange={handleChange}
          checked={checked}
          color="primary"
          name={name}
        />
        <span>Yes</span>
      </div>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomSwitch;
