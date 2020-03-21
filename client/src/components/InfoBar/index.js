import React from 'react';

import onlineIcon from '../../icons/online-icon.png';
import closeIcon from '../../icons/close-icon.png';

import './styles.css';

const InfoBar = ({ room }) => (
  <div className='info-bar'>
    <div className='left-inner-container'>
      <img className='online-icon' src={onlineIcon} alt='online image' />
      <h3>{room}</h3>
    </div>
    <div className='right-inner-container'>
      <a href='/'>
        <img src={closeIcon} alt='close image' />
      </a>
    </div>
  </div>
);

export default InfoBar;
