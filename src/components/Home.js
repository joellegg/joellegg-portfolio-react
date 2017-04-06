import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App App-header">
        <h1>JOEL LEGG</h1>
        <div className='Home__title'>
          <h3 className="Home__job">Software Developer</h3>
          <h3 className="Home__bar Home__job">|</h3>
          <h3 className="Home__job">Petroleum Geologist</h3>
        </div>
        <div className="location-inline">
          <i id='home__icon' className="fa fa-map-marker fa-2x" aria-hidden="true"></i><h3 id='home__location'>Nashville, TN</h3>
        </div>
        <div>
        <img className="profile-pic" src={require('../../img/profile_bw.jpg')} alt="joel" />
        </div>
      </div>
    )
  }
}

export default Home;
