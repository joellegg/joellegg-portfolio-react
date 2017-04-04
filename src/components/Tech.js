import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div className="tech_container">
        <div className='top-row'>
          <div className="hexagon hex1"><span><img id="javascript" src={require('../../img/tech/front-end/js.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="html" src={require('../../img/tech/front-end/HTML5_logo.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="css" src={require('../../img/tech/styles/css3.svg')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="bower" src={require('../../img/tech/helpers/bower-logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img id="babel" src={require('../../img/tech/helpers/babel.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="grunt" src={require('../../img/tech/helpers/grunt.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="npm" src={require('../../img/tech/helpers/npm.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="python" src={require('../../img/tech/back-end/python.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex3"><span><img id="angular" src={require('../../img/tech/frameworks/angularjs.png')} alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="git" src={require('../../img/tech/helpers/git_logo.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="github" src={require('../../img/tech/helpers/github.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="node" src={require('../../img/tech/back-end/nodejs-logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex6"><span><img id="handlebars" src={require('../../img/tech/frameworks/handlebars_logo.png')} alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="npm" src={require('../../img/tech/helpers/npm.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="bootstrap" src={require('../../img/tech/styles/bootstrap.sh.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="materialize" src={require('../../img/tech/styles/materialize.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex4"><span><img id="sublime" src={require('../../img/tech/com-tool/Sublime_Text_Logo.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="illustrator" src={require('../../img/tech/com-tool/illustrator.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="codepen" src={require('../../img/tech/com-tool/codepen.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="trello" src={require('../../img/tech/com-tool/Trello_logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img id="fiji" src={require('../../img/tech/geo/fiji.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src={require('../../img/tech/geo/petrel.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src={require('../../img/tech/geo/petromod.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src={require('../../img/tech/geo/techlog_logo.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex3"><span><img id="sass" src={require('../../img/tech/styles/sass.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="sass" src={require('../../img/tech/styles/sass.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="sass" src={require('../../img/tech/styles/sass.png')} alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="sass" src={require('../../img/tech/styles/sass.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img id="fiji" src={require('../../img/tech/geo/fiji.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src={require('../../img/tech/geo/petrel.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src={require('../../img/tech/geo/petromod.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src={require('../../img/tech/geo/techlog_logo.png')} alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex4"><span><img id="fiji" src={require('../../img/tech/geo/fiji.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src={require('../../img/tech/geo/petrel.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src={require('../../img/tech/geo/petromod.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src={require('../../img/tech/geo/techlog_logo.png')} alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img id="fiji" src={require('../../img/tech/geo/fiji.png')} alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src={require('../../img/tech/geo/petrel.png')} alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src={require('../../img/tech/geo/petromod.png')} alt='' /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src={require('../../img/tech/geo/techlog_logo.png')} alt='' /></span></div>
        </div>
      </div>
    );
  }
}

export default Tech;
