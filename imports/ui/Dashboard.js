import React from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import AddTrip from './AddTrip';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render(){
        return(
            <div className="cc-page-content__autoform">
                <h1>Dashboard</h1>
                <AddTrip />
                <div>
                    <button className="cc-form__button" onClick={()=> Accounts.logout()}>Log Out</button>
                </div>
            </div>  
             
        );
    }
}

export default Dashboard;
