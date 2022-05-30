import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { InfoIcon } from '../SvgIconComponents';

const useStyles = makeStyles({
  inputLabel: {
    color: '#31342B',
    fontSize: '16px',
    top: '-16px',
  },
  input: {
    border: '1px solid #0083FC',
    borderRadius: '4px',
    color: '#7C7C7C',
    paddingRight: '5px',
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
});

const CustomInput = ({
  error,
  labelText,
  tooltipText,
  defaultValue,
  type,
  name,
  handleChange,
  symbol,
}) => {
  const styles = useStyles();
  return (
    <FormControl variant="standard" className="w-100" error={error}>
      <InputLabel className={styles.inputLabel}>
        {labelText}
        <Tooltip title={tooltipText}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </InputLabel>
      <Input
        disableUnderline
        className={styles.input}
        onChange={handleChange}
        type={type}
        defaultValue={defaultValue}
        name={name}
        startAdornment={
          <InputAdornment position="start" className={styles.inputAdornment}>
            {symbol}
          </InputAdornment>
        }
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
