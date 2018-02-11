import React, { Component } from 'react';

import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div>
        <div className='container__button_content'>
          <Tabs />
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
