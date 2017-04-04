import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div className="tech_container">
        <div className='top-row'>
          <div className="hexagon hex1"><span><img id="javascript" src={require('../../img/tech/js.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="html" src={require('../../img/tech/HTML5_logo_black.svg')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="css" src={require('../../img/tech/css3.svg')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="bower" src={require('../../img/tech/bower-logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex2"><span><img id="python" src={require('../../img/tech/python.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="angular" src={require('../../img/tech/AngularJS-Shield-large-282x300.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="git" src={require('../../img/tech/git_logo.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="github" src={require('../../img/tech/github.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex5"><span><img id="node" src={require('../../img/tech/nodejs-logo.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="handlebars" src={require('../../img/tech/handlebars_logo.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="npm" src={require('../../img/tech/npm.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="bootstrap" src={require('../../img/tech/bootstrap.sh.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img id="sublime" src={require('../../img/tech/Sublime_Text_Logo.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="illustrator" src={require('../../img/tech/illustrator.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="codepen" src={require('../../img/tech/codepen.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="trello" src={require('../../img/tech/Trello_logo.png')} alt='' /></span></div>
        </div>
          <div className='odd-row'>
          <div className="hexagon hex4"><span><img id="fiji" src={require('../../img/tech/fiji.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src={require('../../img/tech/petrel.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src={require('../../img/tech/petromod.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src={require('../../img/tech/techlog_logo.png')} alt='' /></span></div>
        </div>
      </div>
    );
  }
}

export default Tech;
