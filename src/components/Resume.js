import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="Resume__container">
        <a href={require('../../img/legg_resume.pdf')} download="legg-resume">
          <img className="Resume__download" src={require('../../img/download_icon.png')} alt="download" />
        </a>
        <img className="Resume__resume" src={require('../../img/legg_resume.jpg')} alt="joel-resume" />
      </div>
    )
  }
}

export default Resume;
