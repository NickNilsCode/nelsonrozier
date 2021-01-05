import React from 'react';
import { render } from 'react-dom';
import { DisclaimerPage } from '../pages';

if (window)
  render(
    <DisclaimerPage data={window.__DATA__} />,
    document.getElementById('app')
  );
