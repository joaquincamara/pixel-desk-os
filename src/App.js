import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.scss';

import { Initsystem } from './views/initSystem/InitSystem';
import { HomeDesk } from './views/homDesk/HomeDesl';

function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <Route path='/home' component={Initsystem} />
        <Route exact path='/' component={HomeDesk} />
      </HashRouter>
    </div>
  );
}

export default App;
