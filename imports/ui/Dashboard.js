import React from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import AddTrip from './AddTrip';

class Dashboard extends React.Component {
 
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <button className="cc-form__button" onClick={()=> Accounts.logout()}>Log Out</button>
                <AddTrip />
                <div id="app-root"></div>
                <div id="modal-root"></div>
             </div>   
        );
    }
}

export default Dashboard;
