import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import messages from '../messages';

function Footer() {
  return (
    <div className="footer flex-middle">
      <Typography variant="body2" color="textSecondary" align="center">
        <FormattedMessage {...messages.copyright} />
        <Link color="inherit" href="...">
          <FormattedMessage {...messages.website} />
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

export default memo(Footer);
