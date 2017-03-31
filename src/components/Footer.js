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
          <NavItem href="/project">Projects</NavItem>
          <NavItem href="/tech">Technologies</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavFooter
