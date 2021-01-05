import React from 'react';
import { render } from 'react-dom';
import { PersonalinjurytemplatePage } from '../pages';

if (window)
  render(
    <PersonalinjurytemplatePage data={window.__DATA__} />,
    document.getElementById('app')
  );
