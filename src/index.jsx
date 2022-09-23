import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import App from './templates/App';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Abc } from './templates/Abc';
import { NotFound } from './templates/NotFound';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/abc" component={Abc} exact />
            <Route path="/*" component={NotFound} exact />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
