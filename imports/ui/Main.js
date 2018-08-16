import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
  </main>
)

export default Main;
