import React from 'react';
import { Navbar } from '../../components/molecules/navbar/Navbar';
import { Window } from '../../components/molecules/window/Window';

import './homeDesk.scss';

export const HomeDesk = () => {
  return (
    <div className='home-desk'>
      <Window />
      <Navbar />
    </div>
  );
};
