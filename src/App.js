import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.scss';

import { Initsystem } from './components/initSystem/InitSystem';

function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <Route exact path='/' component={Initsystem} />
      </HashRouter>
    </div>
  );
}

export default App;
