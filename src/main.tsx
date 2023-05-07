import './i18n';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import BaseStyles from './styles/BaseStyles';

// document.title = import.meta.env.VITE_APP_TITLE;
document.title = "yxy's Blog"
const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

root.render(
  <>
    <BaseStyles />
    <App />
  </>,
);
