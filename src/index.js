// LIBS
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// CSS
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

// COMPONENTS
import App from './components/App';

render((
  <Router>
    <Route path="/" component={App} />
  </Router>
  ),
  document.getElementById('root')
);
