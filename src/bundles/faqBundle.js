import React from 'react';
import { render } from 'react-dom';
import { FaqPage } from '../pages';

if (window)
  render(
    <FaqPage data={window.__DATA__} />,
    document.getElementById('app')
  );
