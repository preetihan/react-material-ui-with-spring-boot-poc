import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <AppWithRouter />
    </ThemeProvider>, document.getElementById('root'));

serviceWorker.register();
