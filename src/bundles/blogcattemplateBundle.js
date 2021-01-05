import React from 'react';
import { render } from 'react-dom';
import { BlogcattemplatePage } from '../pages';

if (window)
  render(
    <BlogcattemplatePage data={window.__DATA__} />,
    document.getElementById('app')
  );
