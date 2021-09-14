import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BASE_TAGS } from './constants';
import { HashRouter as Router } from 'react-router-dom';

window.location.href = BASE_TAGS;

ReactDOM.render(
  <React.StrictMode>
    <Router hashType="noslash">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
