import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="Resume__container">
        <img className="Resume__resume" src={require('../../img/joel_resume.jpg')} alt="joel-resume" />
      </div>
    )
  }
}

export default Resume;
