import React, { memo } from 'react';

function Simple({ children }) {
  return <div className="simple">{children}</div>;
}

export default memo(Simple);
