import React from 'react';
import { render } from 'react-dom';
import { AttorneytemplatePage } from '../pages';

if (window)
  render(
    <AttorneytemplatePage data={window.__DATA__} />,
    document.getElementById('app')
  );
