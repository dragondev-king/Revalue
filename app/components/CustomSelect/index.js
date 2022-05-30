import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
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
  },
});

const CustomSelect = ({
  error,
  defaultValue,
  data,
  handleChange,
  labelText,
  tooltipText,
  name,
}) => {
  const styles = useStyles();
  return (
    <FormControl
      variant="standard"
      className={`${styles.formControl} w-100`}
      error={error}
    >
      <InputLabel shrink className={styles.inputLabel}>
        {labelText}
        <Tooltip title={tooltipText}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </InputLabel>
      <Select
        disableUnderline
        defaultValue={defaultValue}
        name={name}
        onChange={handleChange}
        className={styles.select}
        IconComponent={() => <DropdownIcon />}
      >
        {data.map(value => (
          <MenuItem key={value.name} value={value.name}>
            {value.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;