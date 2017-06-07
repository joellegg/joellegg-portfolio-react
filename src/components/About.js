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
              I was born and raised in Franklin, TN. I earned a masters degree from the University of Alabama in 2014 and became a published geologist. Afterwards, I worked for a multinational oil company in Denver, CO until circumstances led me back to Nashville, TN and into the field of software development.
            </p>
            <p>
              From discovering the next oil reserve to building the next software program, my passion has always been problem solving. I've worked on problems ranging from figuring out how oil formed millions of years ago to how to drill the next well. Technology was always at the heart of the solution. Software development allows me to combine many of my passions into one field. My goal is to merge my past and present into data science to find insights that can better mankind.
            </p>
            <p>
              When I'm not in front of the computer, I can be found working on a home remodel, woodworking, or tending the garden. I enjoy spending time outdoors, hiking, fishing, golfing, and skiing. Above all, I love to spend time with family and friends.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
