import React from 'react';
import { render } from 'react-dom';
import { ContactPage } from '../pages';

if (window)
  render(
    <ContactPage data={window.__DATA__} />,
    document.getElementById('app')
  );
