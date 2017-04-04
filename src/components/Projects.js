import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects_container">
        <div className="project__style">
          <h2>Well Logged</h2>
          <p>Well Logged organizes well logs that are collected during the drilling for oil and gas and applies machine learning techniques to extract text and data from the logs. Each state collects the data but it can be difficult to traverse the various state websites and the data is stored in TIFF format which makes the logs difficult to work with. The project uses React on the front end and SQL for the backend.</p>
        </div>
        <div className="project__style">
          <a href="https://github.com/joellegg/tool-trader-ionic"><h2>Tool-trader</h2></a>
          <p>Tool-trader is a mobile app that allows a user to borrow or rent tools from friends and locals. The app was built with HTML, CSS, JavaScript and the Ionic framework. Cordova plugins were used on the client-side, and Firebase for the server-side</p>
        </div>
        <div className="project__style">
          <h2>Bangazon</h2>
          <p>Bangazon is a comand line interface tool that lets users order products. The project used Test Driven Development with Node.js, and a SQL database.</p>
        </div>
      </div>
    );
  }
}

export default Projects;
