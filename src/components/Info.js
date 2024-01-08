import React from 'react';
import erenPfp from '../images/eren.jpg';

export default function Info() {
  return (
    <div className="info-container">
      <div>
        <img src={erenPfp} class="pfp"/>
      </div>
      <h2 className="name">Eren Yeager</h2>
      <p className="location">Paradis Island</p>
      <small className="email">eren_yeager.com</small>
      <button>Email</button>
    </div>
  );
}