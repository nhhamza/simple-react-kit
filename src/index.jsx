import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'core-js-pure/stable';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { store } from './redux/store';
import theme from './styles/theme';

import App from './App.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
