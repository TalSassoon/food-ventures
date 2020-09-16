import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { FoodApp } from './pages/FoodApp';
import { NavBar } from './cmps/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route component={FoodApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;