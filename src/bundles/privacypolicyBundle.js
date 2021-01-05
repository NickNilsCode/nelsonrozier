import React from 'react';
import { render } from 'react-dom';
import { PrivacypolicyPage } from '../pages';

if (window)
  render(
    <PrivacypolicyPage data={window.__DATA__} />,
    document.getElementById('app')
  );
