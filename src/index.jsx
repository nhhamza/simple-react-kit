import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ThemeProvider, Typography } from '@material-ui/core';
import { store } from './redux/store';

import App from './App.jsx';
import theme from './styles/theme';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <Typography>
          <App />
        </Typography>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
