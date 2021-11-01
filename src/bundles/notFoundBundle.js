import React from 'react';
import { render } from 'react-dom';
import { NotFoundPage } from '../pages';

if (window)
  render(
    <NotFoundPage data={window.__DATA__} />,
    document.getElementById('app')
  );
