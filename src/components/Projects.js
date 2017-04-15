import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects_container">
        <div className="project__style">
          <p><strong><a target="_blank" href=''>Well Logged</a></strong> organizes well logs that are collected during the drilling for oil and gas and applies machine learning techniques to extract text and data from the logs. Each state collects the data but it can be difficult to traverse the various state websites and the data is stored in TIFF format which makes the logs difficult to work with. The project uses React on the front end and SQL for the backend.</p>
        </div>
        <div className="project__style">
          <div className='Project__inline'>
            <p><strong><a target="_blank" href="https://github.com/joellegg/tool-trader-ionic">Tool-trader</a></strong> is a mobile app that allows a user to borrow or rent tools from friends and locals. The app was built with HTML, CSS, JavaScript and the Ionic framework. Cordova plugins were used on the client-side, and Firebase for the server-side</p>
            <div className='Project__trader-images'>
              <img className="Project-tool-trader" src={require('../../img/tool-trader/IMG_4234.PNG')} alt="tool-trader" />
              <img className="Project-tool-trader" src={require('../../img/tool-trader/IMG_4235.PNG')} alt="tool-trader" />
              <img className="Project-tool-trader" src={require('../../img/tool-trader/IMG_4236.PNG')} alt="tool-trader" />
              <img className="Project-tool-trader" src={require('../../img/tool-trader/IMG_4238.PNG')} alt="tool-trader" />
            </div>
          </div>
        </div>
        <div className="project__style">
          <div className='Project__inline'>
            <p><strong><a target="_blank" href='https://github.com/joellegg/bangazon-cli-ordering-system'>Bangazon</a></strong> is a comand line interface tool that lets users order products. The project used Test Driven Development with Node.js, and a SQL database.</p>
            <div className='Project__bangazon-images'>
              <img className="Project__bangazon_img" src={require('../../img/bangazon/bangazon_erd.png')} alt="bangazon_ERD" />
              <img className="Project__bangazon_img" src={require('../../img/bangazon/bangazon_cust.png')} alt="bangazon" />
              <img className="Project__bangazon_img" src={require('../../img/bangazon/bangazon_pop.png')} alt="bangazon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
