import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, SplitButton, MenuItem } from 'react-bootstrap';
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
        <ButtonToolbar>
          <ButtonGroup vertical block>
            <SplitButton title="Dropup" dropup id="split-button-dropup">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
          </ButtonGroup>
        </ButtonToolbar>

      </div>
    );
  }
}

export default App;
