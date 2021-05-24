import React from 'react';
import { ThemeProvider } from 'theme-ui';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
