import React from 'react';
import { render } from 'react-dom';
import { PersonalinjuryPage } from '../pages';

if (window)
  render(
    <PersonalinjuryPage data={window.__DATA__} />,
    document.getElementById('app')
  );
