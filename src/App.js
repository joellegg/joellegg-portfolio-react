import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App App-header">
        <h1>JOEL LEGG</h1>
        <h5>Full Stack Software Developer</h5>
        <h5>Petroleum Geologist</h5>
        <h5>Nashville, TN</h5>
      </div>
      <Button
        bsStyle="success"
        bsSize="large"
        href="http://react-bootstrap.github.io/components.html"
        target="_blank">
        View React Bootstrap Docs
      </Button>
      </div>
    );
  }
}

export default App;
