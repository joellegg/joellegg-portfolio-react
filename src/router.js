 import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

// COMPONENTS
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Resume from './components/Resume';


// browser router will pass params from the URL
const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/tech" component={Tech} />
      <Route path="/resume" component={Resume} />
    </App>
  </Router>
);

export default routes;
