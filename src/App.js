import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.scss';

import { Initsystem } from './views/initSystem/InitSystem';
import { HomeDesk } from './views/homDesk/HomeDesl';

function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <Route exact path='/' component={Initsystem} />
        <Route path='/home' component={HomeDesk} />
      </HashRouter>
    </div>
  );
}

export default App;
