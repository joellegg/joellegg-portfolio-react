import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about_container">
        <h1>About</h1>
        <div className="About__row">
          <img className="About__funpic" src={require('../../img/joel-mug.jpg')} alt="joel-mug" />
          <div className="About__text">
            <p>
              Hi, I'm Joel, a Nashville native and a full stack software engineer. I've built projects using multiple languages, but I enjoy JavaScript the most (so far!). I hold a masters degree in Geology from the University of Alabama and even worked as a petroleum geologist for several years. 
            </p>
            <p>
              From discovering the next oil reserve to building the next software program, my passion has always been problem solving. Software development allows me to combine many of my passions into one field.
            </p>
            <p>
              Outside of software development, I'm a husband, new father! and hobbyist woodworker. When possible, I enjoy spending time outdoors, hiking, fishing, golfing, and skiing. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
