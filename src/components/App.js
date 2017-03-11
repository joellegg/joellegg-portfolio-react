import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <h1>JOEL Ball LEGG</h1>
        <h3>Full Stack Software Developer</h3>
        <h3>Petroleum Geologist</h3>
        <h4>Nashville, TN</h4>
        <image source={require("./profile_bw.jpg")}></img>
      </div>
    );
  }
}

export default App;
