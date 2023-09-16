// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import  store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);

reportWebVitals(console.log);
