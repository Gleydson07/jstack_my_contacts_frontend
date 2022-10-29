import React from 'react';
import {
  Routes as Routers,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { NewContact } from './pages/NewContact';
import { Container as EditContact } from './pages/EditContact';

export const Routes = () => {
  return (
    <Routers>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<NewContact/>}/>
      <Route path="/edit/:id" element={<EditContact/>}/>
    </Routers>
  )
}
