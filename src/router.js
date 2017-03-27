import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

// COMPONENTS
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </App>
  </Router>
);

export default routes;
