import React from 'react';
import PixelDeskLogo from '../../assets/pixel-desk-logo.svg';
import zeldaMusic from '../../assets/zelda.mp3';
import castlevaniaMusic from '../../assets/castlevania.mp3';
import pokemonMusic from '../../assets/pokemon.mp3';

import './initSystem.scss';

const music = [zeldaMusic, castlevaniaMusic, pokemonMusic];
const shuffledMusic = music
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

export const Initsystem = () => {
  return (
    <div className='init-system'>
      <img src={PixelDeskLogo} alt='Pixel-Desk-Logo' />
      <audio hidden src={shuffledMusic[0]} controls autoPlay />
    </div>
  );
};
