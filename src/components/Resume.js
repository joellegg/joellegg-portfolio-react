import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="Resume__container">
        <a href={require('../../img/legg-resume.png')} download="legg-resume">
          <img className="Resume__download" src={require('../../img/download_icon.png')} />
        </a>
        <img className="Resume__resume" src={require('../../img/legg-resume.png')} alt="joel-resume" />
      </div>
    )
  }
}

export default Resume;
