// ComingUp.js
import React from 'react';
import './comingup.css';
import headshot from './images/Headshot-AJ.png';

function ComingUp() {
  return (
    <div className="coming-up">
    <img className='img' src={headshot} height="300" width="300" alt="Email Icon"/>
    <div className='desc'><b><i>Hi there! </i></b>
      <br></br>
            <br></br>
      <br></br>
      <b>I'm <b className='anukriti-text'> Anukriti</b> and yes, I built this.  I ideate, design, build and manage software applications and products. </b>  </div>
    </div>
  );
}

export default ComingUp;
