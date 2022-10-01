/* eslint-disable global-require */
import React from 'react';

function Brand(props) {
  return (
    <div className="flex flex-middle flex-space-between brand-area">
      <div className="flex flex-middle brand">
        <img
          src={require('../../images/icon-512x512.png')}
          alt="company-logo"
        />
        <span className="brand__text pl-20">{props.name}</span>
      </div>
    </div>
  );
}

export default Brand;
