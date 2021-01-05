import React from 'react';
import { render } from 'react-dom';
import { AboutPage } from '../pages';

if (window)
  render(
    <AboutPage data={window.__DATA__} />,
    document.getElementById('app')
  );
