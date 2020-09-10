import React, { useState, useEffect } from 'react';
import moment from 'moment';

import ShutDownImage from '../../../assets/pixel-desk-icon.svg';

import '98.css';
import './navbar.scss';

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [date, setDate] = useState(moment().format('MM/DD/YY h:mm:ss a'));

  useEffect(() => {
    let timerID = setInterval(() => handleClock(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  function handleClock() {
    setDate(moment().format('MM / DD / YY h:mm:ss a'));
  }

  return (
    <div className='navbar'>
      <div className='navbar__dropup'>
        <button
          onClick={() => setIsMenuActive(!isMenuActive)}
          className='navbar__dropbtn'
        >
          <img src={ShutDownImage} alt='Shut-down' />
        </button>
        <div
          hidden={isMenuActive}
          className={isMenuActive ? '' : 'navbar__dropup-content'}
        >
          <p>System info</p>
          <p>Music player</p>
          <p>Video game console</p>
          <p>Documents</p>
          <p>Settings</p>
          <p>Notepad</p>
          <p className='navbar__dropup-content__shut-down'>Shut Down</p>
        </div>
      </div>

      <button disabled className='navbar__dropbtn-active'>
        {date}
      </button>
    </div>
  );
};
