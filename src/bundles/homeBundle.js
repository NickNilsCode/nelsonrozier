import React from 'react';
import { render } from 'react-dom';
import { HomePage } from '../pages';

if (window)
  render(
    <HomePage data={window.__DATA__} />,
    document.getElementById('app')
  );
