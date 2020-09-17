import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { NavBar } from './cmps/NavBar';
import { FoodApp } from './pages/FoodApp';
import { UserDetails } from './pages/UserDetails';
import { ReservationEdit } from './pages/ReservationEdit';

function App() {
  return (
    <div className="app main-container app-container">
      <NavBar/>
      <Switch>
        <Route component={ReservationEdit} path='/reservation/:reservationId?' />
        <Route component={UserDetails} path='/details/:userId' />
        <Route component={FoodApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;