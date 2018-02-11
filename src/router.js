 import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

// COMPONENTS
import Tabs from './components/Tabs';
import App from './components/App';

// browser router will pass params from the URL
const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Tabs} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/projects" component={Projects} /> */}
      {/* <Route path="/tech" component={Tech} /> */}
      {/* <Route path="/resume" component={Resume} /> */}
    </App>
  </Router>
);

export default routes;
