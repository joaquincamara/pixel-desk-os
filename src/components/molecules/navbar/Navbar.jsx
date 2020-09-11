import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import startMenuIcon from '../../../assets/pixel-desk-icon.svg';
import shutDownIcon from '../../../assets/shut_down_normal.ico';
import notePadIcon from '../../../assets/notepad.ico';
import SettingIcon from '../../../assets/settings_gear.ico';
import documentsIcon from '../../../assets/directory_closed.ico';
import gameIcon from '../../../assets/game_mine_2.ico';
import musicPlayerIcon from '../../../assets/multimedia.ico';
import systemInfoIcon from '../../../assets/system-infor.ico';

import '98.css';
import './navbar.scss';

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [date, setDate] = useState(moment().format('MM/DD/YY h:mm:ss a'));
  const history = useHistory();

  useEffect(() => {
    let timerID = setInterval(() => handleClock(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  function handleClock() {
    setDate(moment().format('h:mm:ss a--MM / DD / YY'));
  }

  return (
    <div className='navbar'>
      <div className='navbar__dropup'>
        <button
          onClick={() => setIsMenuActive(!isMenuActive)}
          className='navbar__dropbtn'
        >
          <img src={startMenuIcon} alt='Shut-down' />
        </button>
        <div
          hidden={isMenuActive}
          className={isMenuActive ? '' : 'navbar__dropup-content'}
        >
          <div className='navbar__dropup-content__action'>
            <img src={systemInfoIcon} alt='system-infor' />
            <p>System info</p>
          </div>
          <div className='navbar__dropup-content__action'>
            <img src={musicPlayerIcon} alt='musicPlayerIcon' />
            <p>Music player</p>
          </div>
          <div className='navbar__dropup-content__action'>
            <img src={gameIcon} alt='gameIcon' />
            <p>Video game console</p>
          </div>
          <div className='navbar__dropup-content__action'>
            <img src={documentsIcon} alt='documents' />
            <p>Documents</p>
          </div>
          <div className='navbar__dropup-content__action'>
            <img src={SettingIcon} alt='Setting-Icon' />
            <p>Settings</p>
          </div>
          <div className='navbar__dropup-content__action'>
            <img src={notePadIcon} alt='note-Pad' />
            <p>Notepad</p>
          </div>
          <div
            onClick={() => history.push('/')}
            className='navbar__dropup-content__action-shut-down'
          >
            <img src={shutDownIcon} alt='shut-Down' />
            <p>Shut Down</p>
          </div>
        </div>
      </div>

      <button disabled className='navbar__dropbtn-active'>
        {date}
      </button>
    </div>
  );
};
