import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from '../../client/app';

const ClientApp = () => {
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
Meteor.startup(() => {
  // code to run on server at startup
  render(<ClientApp />, document.getElementById('root'));
});
