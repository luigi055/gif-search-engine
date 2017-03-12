import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import './scss/style.scss';
import App from './components/App';
import routes from './routes';
import { configure } from './store/configureStore';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
