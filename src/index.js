import React from 'react';
import Component from './Component';

window.onload = () => {
  React.render(
    <Component />,
    document.getElementById('container')
  );
};
