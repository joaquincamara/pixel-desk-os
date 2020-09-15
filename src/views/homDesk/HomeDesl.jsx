import React from 'react';
import { Navbar } from '../../components/molecules/navbar/Navbar';
import { SystemInfo } from '../../components/systemInfo/SystemInfo';

import './homeDesk.scss';

export const HomeDesk = () => {
  return (
    <div className='home-desk'>
      <SystemInfo />
      <Navbar />
    </div>
  );
};
