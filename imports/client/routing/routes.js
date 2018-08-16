import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../../ui/Login';
import Register from '../../ui/Register';
import Dashboard from '../../ui/Dashboard';
import App from '../app';

const unauthenticatedPages = ['/', '/register', '/login'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) => {
       const pathname = window.location.pathname;
  
       const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
       const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
       if(isUnauthenticatedPage && isAuthenticated){
      
           window.location.pathname = '/dashboard';
      
      } else if (isAuthenticatedPage && !isAuthenticated){
          window.location.pathname = '/';
       }
};


export const routes = () => (
  <main>
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
  </main>
)
