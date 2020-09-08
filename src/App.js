import React from 'react';
import { Router } from '@reach/router';

import './App.scss';

import { Initsystem } from './components/initSystem/InitSystem';

function App() {
  return (
    <Router className='App'>
      <Initsystem path='/' />
    </Router>
  );
}

export default App;
