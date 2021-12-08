import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';

function InputText({
  label,
  name,
  inputType,
  helperText,
  assistText,
  error,
  value,
  controlFunc,
  disabled,
  placeholder,
  multiline,
  variant,
}) {
  return (
    <TextField
      className="textCustom"
      placeholder={placeholder}
      disabled={disabled}
      helperText={helperText || (assistText || '')}
      error={error}
      label={label}
      name={name}
      variant={variant}
      type={inputType}
      value={value}
      fullWidth
      multiline={multiline}
      InputLabelProps={disabled ? { shrink: true } : {}}
      onChange={controlFunc}
    />
  );
}

export default memo(InputText);
