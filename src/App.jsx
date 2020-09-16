import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { NavBar } from './cmps/NavBar';
import { FoodApp } from './pages/FoodApp';
import { UserDetails } from './pages/UserDetails';
import { ReservationEdit } from './pages/ReservationEdit';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route component={ReservationEdit} path='/reservation/:id?' />
        <Route component={UserDetails} path='/details/:id' />
        <Route component={FoodApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;