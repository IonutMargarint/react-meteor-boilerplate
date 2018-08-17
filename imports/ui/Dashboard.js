import React from 'react';
import { Accounts } from 'meteor/accounts-base';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>This is your dashboard!</h1>
                <button className="cc-form__button" onClick={()=> Accounts.logout()}>Log Out</button>
             </div>   
        );
    }
}

export default Dashboard;