import React from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import AddTrip from './AddTrip';

const root = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <button className="cc-form__button" onClick={()=> Accounts.logout()}>Log Out</button>
                <AddTrip />
                <div id="root"></div>
                <div id="modal-root"></div>
             </div>   
        );
    }
}

export default Dashboard;
