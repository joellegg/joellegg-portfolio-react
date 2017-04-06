import React, { Component } from 'react';
import NavFooter from './Footer';

function Links() {
  return (
    <div className='links'>
      <div className="links-right">
        <a href="https://www.linkedin.com/in/joel-legg-279a5b58/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a href="mailto:joellegg@bellsouth.net"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        <a href="https://github.com/joellegg"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
      </div>
      <div className="links__lg">
        <a href="/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        <a href="/about"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        <a href="/projects"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
        <a href="/tech"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <div className='container__button_content'>
          <Links />
          { this.props.children }
        </div>
        <NavFooter />
      </div>
    );
  }
}

export default App;
