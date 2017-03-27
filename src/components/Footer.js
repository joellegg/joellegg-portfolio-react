import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Link from 'react-router-dom';

const NavFooter = () => {
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
          <NavItem href="/about">About</NavItem>
          <NavItem eventKey={2} href="#">Projects</NavItem>
          <NavItem eventKey={3} href="#">Technologies</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavFooter
