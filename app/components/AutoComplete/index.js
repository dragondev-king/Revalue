import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputLabel: {
    color: '#31342B',
    fontSize: '16px',
    top: '-4px',
  },
  input: {
    border: '1px solid #0083FC',
    borderRadius: '4px',
    color: '#7C7C7C',
    padding: '6px 10px 2px',
    background: '#FFFFFF',
  },
});

function AutoComplete({
  id,
  options,
  value,
  renderOption,
  label,
  onChange,
  popupIcon,
  error,
  getOptionLabel,
  disabled,
}) {
  const styles = useStyles();
  return (
    <Autocomplete
      id={id}
      key={id + label}
      options={options}
      size="small"
      value={value}
      onChange={onChange}
      popupIcon={popupIcon}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      disabled={disabled}
      renderInput={params => (
        <TextField
          key={id + label}
          {...params}
          label={label}
          error={error}
          margin="normal"
          InputLabelProps={{
            shrink: true,
            className: styles.inputLabel,
          }}
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            className: styles.input,
          }}
        />
      )}
    />
  );
}

export default memo(AutoComplete);
