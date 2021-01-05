import React from 'react';
import { render } from 'react-dom';
import { BlogtemplatePage } from '../pages';

if (window)
  render(
    <BlogtemplatePage data={window.__DATA__} />,
    document.getElementById('app')
  );
