import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App App-header">
        <h1>JOEL LEGG</h1>
        <h3>Full Stack Software Developer</h3>
        <h3>Petroleum Geologist</h3>
        <div className="location-inline">
          <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i><h3>Nashville, TN</h3>
        </div>
        <div>
        <img className="profile-pic" src={require('../../img/profile_bw.jpg')} alt="joel" />
        </div>
      </div>
    )
  }
}

export default Home;
