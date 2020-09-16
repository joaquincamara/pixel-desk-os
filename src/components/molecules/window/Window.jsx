import React, { useEffect, useState } from 'react';
import '98.css';

import './window.scss';

export const Window = ({ title, children }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    dragElement(document.getElementById('draggableDiv'));
  });

  function dragElement(elment) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    if (document.getElementById(elment.id + 'Header')) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elment.id + 'Header').onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elment.onmousedown = dragMouseDown;
    }

    function dragMouseDown(event) {
      event = event || window.event;
      event.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = event.clientX;
      pos4 = event.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(event) {
      event = event || window.event;
      event.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      // set the element's new position:
      elment.style.top = elment.offsetTop - pos2 + 'px';
      elment.style.left = elment.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function handleMinimizeWindow() {
    setIsMinimized(!isMinimized);
    localStorage.setItem(title, isMinimized);
  }

  return (
    <div
      hidden={isClosed || isMinimized}
      id='draggableDiv'
      className={isMaximized ? 'window__maximize ' : 'window'}
    >
      <div id='draggableDivHeader' className='title-bar'>
        <div className='title-bar-text'>{title}</div>
        <div className='title-bar-controls'>
          <button
            onClick={() => handleMinimizeWindow()}
            aria-label='Minimize'
          />
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            aria-label='Maximize'
          />
          <button onClick={() => setIsClosed(!isClosed)} aria-label='Close' />
        </div>
      </div>

      <div className='window-body'>{children}</div>
    </div>
  );
};
