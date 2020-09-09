import React, { useState, useEffect } from 'react';
import PixelDeskLogo from '../../assets/pixel-desk-logo.svg';
import zeldaMusic from '../../assets/zelda.mp3';
import castlevaniaMusic from '../../assets/castlevania.mp3';
import pokemonMusic from '../../assets/pokemon.mp3';
import { useHistory } from 'react-router-dom';
import { When } from '../../utils/When';

import './initSystem.scss';

const music = [zeldaMusic, castlevaniaMusic, pokemonMusic];
const shuffledMusic = music
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

export const Initsystem = () => {
  const step = 1;
  const interval = 30;
  const maxProgress = 100;
  const history = useHistory();
  let id;

  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgressPercentage(progressPercentage + step);
    };

    if (progressPercentage < maxProgress) {
      setTimeout(updateProgress, interval);
    }

    return clearTimeout(id);
  }, [progressPercentage, id]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleInitSystem);

    return () => {
      window.removeEventListener('keydown', handleInitSystem);
    };
  }, []);

  const handleInitSystem = (event) => {
    if (event.key === 'Enter') {
      history.push('/home');
    }
  };

  return (
    <div className='init-system'>
      <img src={PixelDeskLogo} alt='Pixel-Desk-Logo' />
      <progress max='100' value={progressPercentage} />
      <When predicate={progressPercentage === 100}>
        <p className='blinking'>Press ENTER to Log-in</p>

        <audio hidden src={shuffledMusic[0]} controls autoPlay />
      </When>
    </div>
  );
};
