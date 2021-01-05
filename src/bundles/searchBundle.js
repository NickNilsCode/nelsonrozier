import React from 'react';
import { render } from 'react-dom';
import { SearchPage } from '../pages';

if (window)
  render(
    <SearchPage data={window.__DATA__} />,
    document.getElementById('app')
  );
