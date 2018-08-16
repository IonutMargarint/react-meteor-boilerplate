import React from 'react';
import { Tracker } from 'meteor/tracker';
import { routes, onAuthChange } from '../../client/routing/routes';
import ReactDOM from 'react-dom';

Tracker.autorun(() => {
    
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);

});  

Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(React.createElement (routes), document.getElementById('root'));
});
