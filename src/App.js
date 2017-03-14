import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, ButtonToolbar, ButtonGroup, SplitButton, MenuItem } from 'react-bootstrap';
import './App.css';

function Links() {
  return (
    <div className="links-right">
      <a href="https://www.linkedin.com/in/joel-legg-279a5b58/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
      <a href="mailto:joellegg@bellsouth.net"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
      <a href="https://github.com/joellegg"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
    </div>
  );
}

function Body() {
  return (
    <div className="App App-header">
      <h1>JOEL LEGG</h1>
      <h3>Full Stack Software Developer</h3>
      <h3>Petroleum Geologist</h3>
      <div className="location-inline">
        <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i><h3>Nashville, TN</h3>
      </div>
      <div>
      <img className="profile-pic" src={require('../img/profile_bw.jpg')} />
      </div>
    </div>
  )
}

function NavFooter() {
  return (
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
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Links />
        <Body />
        <NavFooter />
      </div>
    );
  }
}

export default App;
