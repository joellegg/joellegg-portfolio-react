// LIBS
// eslint-disable-next-line
import React from 'react';
import { render } from 'react-dom';

// CSS
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/About.css';
import './css/Tech.css';
import './css/Projects.css';
import './css/index.css';
import './css/App.css';

// ROUTES
import routes from './router';

render(
  routes,
  document.getElementById('root')
)
