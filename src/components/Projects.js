import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects_container">
        <div className="project__style">
          <a href="https://github.com/joellegg/tool-trader-ionic"><h2>Tool-trader</h2></a>
          <p>Tool-trader is a mobile app that allows a user to borrow or rent tools from friends and locals. The app was built with HTML, CSS, JavaScript and the Ionic framework. Cordova plugins were used on the client-side, and Firebase for the server-side</p>
        </div>
        <div className="project__style">
          <h2>Bangazon</h2>
        </div>
        <div className="project__style">
          <h2>Well Data Organized</h2>
        </div>
      </div>
    );
  }
}

export default Projects;
