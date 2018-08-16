import React from 'react';
import { Accounts } from 'meteor/accounts-base';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div>This is your dashboard!</div>
                <button onClick={()=> Accounts.logout()}>Log Out</button>
             </div>   
        );
    }
}

export default Dashboard;