import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { NavBar } from './cmps/NavBar';
import { FoodApp } from './pages/FoodApp';
import { UserDetails } from './pages/UserDetails';
import { ReservationEdit } from './pages/ReservationEdit';
import { Chefs } from './pages/Chefs';
import { ReservationPage } from './pages/ReservationPage';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route component={ReservationEdit} path='/reservation/:reservationId?' />
        <Route component={ReservationPage} path='/reservations' />
        <Route component={UserDetails} path='/details/:userId' />
        <Route component={Chefs} path='/chef' />
        <Route component={FoodApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;