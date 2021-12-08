import React from 'react';
import Icon from '@material-ui/core/Icon';

function Brand(props) {
  return (
    <div className="flex flex-middle flex-space-between brand-area">
      <div className="flex flex-middle brand">
        {/*   <img
          src={require('../../images/icon-512x512.png')}
          alt="company-logo"
        /> */}
        <Icon className="mr-20">apartment</Icon>
        <span className="brand__text">{props.name}</span>
      </div>
    </div>
  );
}

export default Brand;
