import React from 'react';
import { render } from 'react-dom';
import { CaseresultsPage } from '../pages';

if (window)
  render(
    <CaseresultsPage data={window.__DATA__} />,
    document.getElementById('app')
  );
