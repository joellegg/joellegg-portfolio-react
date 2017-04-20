import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div className="tech_container">
        <div className='top-row'>
          <div className="hexagon hex1"><span><img src={require('../../img/tech/front-end/js.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img src={require('../../img/tech/front-end/HTML5_logo.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/styles/css3.svg')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/helpers/bower-logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/helpers/babel.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/helpers/grunt.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/helpers/npm.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img src={require('../../img/tech/back-end/python.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/frameworks/angularjs.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/helpers/git_logo.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img src={require('../../img/tech/helpers/github.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img src={require('../../img/tech/back-end/nodejs-logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex6"><span><img src={require('../../img/tech/frameworks/handlebars_logo.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id='mocha-chai' src={require('../../img/tech/helpers/mocha.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id='mocha-chai' src={require('../../img/tech/helpers/Chai.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/styles/materialize.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/com-tool/Sublime_Text_Logo.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img src={require('../../img/tech/com-tool/illustrator.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img src={require('../../img/tech/com-tool/codepen.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/com-tool/Trello_logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/com-tool/moqups.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img src={require('../../img/tech/com-tool/Slack.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img src={require('../../img/tech/back-end/knex.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img src={require('../../img/tech/frameworks/ionic.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/styles/sass.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/back-end/express.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/back-end/firebase.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img src={require('../../img/tech/back-end/postgresql-logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/geo/fiji.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img src={require('../../img/tech/geo/petrel.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img src={require('../../img/tech/geo/petromod.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img src={require('../../img/tech/geo/techlog_logo.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex4"><span><img src={require('../../img/tech/frameworks/jquery.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img src={require('../../img/tech/frameworks/react-logo.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id='bootstrap' src={require('../../img/tech/styles/bootstrap.sh.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img src={require('../../img/tech/back-end/Bookshelfjs.png')} alt='' /></span></div>
        </div>
      </div>
    );
  }
}

export default Tech;
