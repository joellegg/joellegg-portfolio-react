import React, { Component } from 'react';

class Tech extends Component {
  render() {
    return (
      <div className="tech_container">
        <div className='top-row'>
          <div className="hexagon hex1"><span><img id="javascript" src="../img/tech/js.png" alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="html" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="css" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="bower" src="../img/tech/" alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex2"><span><img id="python" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="angular" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex4"><span><img id="git" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="github" src="../img/tech/" alt='' /></span></div>
        </div>
        <div className='odd-row'>
          <div className="hexagon hex5"><span><img id="node" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="handlebars" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex2"><span><img id="npm" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="bootstrap" src="../img/tech/" alt='' /></span></div>
        </div>
        <div className='even-row'>
          <div className="hexagon hex4"><span><img id="sublime" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="illustrator" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="codepen" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex3"><span><img id="trello" src="../img/tech/" alt='' /></span></div>
        </div>
          <div className='odd-row'>
          <div className="hexagon hex4"><span><img id="fiji" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex5"><span><img id="petrel" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex6"><span><img id="petromod" src="../img/tech/" alt='' /></span></div>
          <div className="hexagon hex7"><span><img id="techlog" src="../img/tech/" alt='' /></span></div>
        </div>
      </div>
    );
  }
}

export default Tech;
