import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
        />
      )}
    />
  );
}

export default memo(AutoComplete);
