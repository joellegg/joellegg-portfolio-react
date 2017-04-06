import React, { Component } from 'react';
import NavFooter from './Footer';

function Links() {
  return (
    <div className='links'>
      <div className="links-right">
        <span className='links__circle'>
          <a href="https://www.linkedin.com/in/joel-legg-279a5b58/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a href="mailto:joellegg@bellsouth.net"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a href="https://github.com/joellegg"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
        </span>
      </div>
      <div className="links__lg">
        <span className='links__circle'>
          <a href="/"><i className="fa fa-home fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a href="/about"><i className="fa fa-info fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a href="/projects"><i className="fa fa-product-hunt fa-2x" aria-hidden="true"></i></a>
        </span>
        <span className='links__circle'>
          <a href="/tech"><i className="fa fa-language fa-2x" aria-hidden="true"></i></a>
        </span>
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
