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
  getOptionLabel,
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
      renderInput={params => (
        <TextField
          key={id + label}
          {...params}
          label={label}
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
}

export default memo(AutoComplete);
