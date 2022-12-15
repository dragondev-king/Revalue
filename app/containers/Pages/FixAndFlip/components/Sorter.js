import * as React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import messages from '../messages';

const useStyles = makeStyles({
  container: {
    border: '1px solid #E9F2FB',
    borderRadius: '6px',
    padding: '10px',
    color: '#31342B',
    fontSize: '16px',
    fontWeight: '500',
  },
  select: {
    background: 'none',
    border: 'none',
    outline: 'none',
  },
  option: {
    border: 'none',
  },
});

export const Sorter = ({ values, intl }) => {
  const styles = useStyles();
  const [value, setValue] = React.useState(values[0]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={styles.container}>
      <span>
        {intl.formatMessage({
          ...messages.sortBy,
        })}
      </span>
      <select
        id="simple-select"
        name={value}
        onChange={handleChange}
        className={styles.select}
      >
        {values.map(val => (
          <option value={val} key={val} className={styles.option}>
            {val}
          </option>
        ))}
      </select>
    </Box>
  );
};
