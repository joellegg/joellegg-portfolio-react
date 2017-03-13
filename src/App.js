import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, ButtonToolbar, ButtonGroup, SplitButton, MenuItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="links-right">
          <p>buttons for links</p>
        </div>
        <div className="App App-header">
          <h1>JOEL LEGG</h1>
          <h4>Full Stack Software Developer</h4>
          <h4>Petroleum Geologist</h4>
          <h4>Nashville, TN</h4>
        </div>
        <Navbar inverse collapseOnSelect fixedBottom>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">More...</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">About</NavItem>
              <NavItem eventKey={2} href="#">Projects</NavItem>
              <NavItem eventKey={1} href="#">Technologies</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
