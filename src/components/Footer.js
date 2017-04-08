import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

// this is a stateless functional component
// written with React.createClass allows it to have state
const NavFooter = () => {
  return (

    <Navbar inverse collapseOnSelect fixedBottom className='navbar__lg'>
      <Navbar.Header>
        <Navbar.Brand>
          <a>More...</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <div className='footer__links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/tech'>Technologies</Link>
        </div>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default NavFooter
