import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../../views/About/About.component';
import Contact from '../../views/Contact/Contact.component';
import Home from '../../views/Home/Home.component';

export const AppRouter: React.FC = ({ children }) => (
<Router>
  { children }
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/contact' component={Contact}/>
    <Route path="/about" component={About}/>
  </Switch>
</Router>
);