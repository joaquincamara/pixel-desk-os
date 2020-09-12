import React from 'react';
import '98.css';

import './window.scss';

export const Window = () => {
  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>System Info</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize' />
          <button aria-label='Maximize' />
          <button aria-label='Close' />
        </div>
      </div>

      <div className='window-body'></div>
    </div>
  );
};
