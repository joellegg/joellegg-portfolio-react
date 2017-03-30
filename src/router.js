import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

// COMPONENTS
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tech" component={Tech} />
    </App>
  </Router>
);

export default routes;
