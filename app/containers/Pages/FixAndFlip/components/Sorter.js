import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const Sorter = ({ values }) => {
  const [value, setValue] = React.useState(values[0]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Sort by:</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={value}
          label="Sort by:"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values.map(val => (
            <MenuItem value={val} key={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
