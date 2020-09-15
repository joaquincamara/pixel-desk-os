import React from 'react';
import { Window } from '../molecules/window/Window';
import logoImg from '../../assets/pixel-desk-logo.svg';

import './systemInfo.scss';

export const SystemInfo = () => {
  return (
    <Window title={'System Info'}>
      <div className='system-info'>
        <img src={logoImg} alt='Logo' />
        <p>Pixel Desk Os</p>
        <p>Copyright c 2020</p>
        <p>
          Started as a way to improve Front-end skills and motivated by "Stay in
          home" of the Coronavirus Pandemic, Pixel Desk Os is taking the shape
          of a little Os in you browser to listen you favorite play list, taking
          some notes o why not ? play a old arcade video game. Just the time
          will tell us the future of Pixel Desk Os
        </p>
      </div>
    </Window>
  );
};
