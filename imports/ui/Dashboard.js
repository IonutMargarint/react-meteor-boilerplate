import React from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import AddTrip from './AddTrip';
import TripsList from './TripsList';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state={
           tripId: false,
           list: []
        }
    }

componentDidMount(){
        Meteor.call('trips.getAll', (err, res) => {
            console.log(res);
            this.setState({list: res})
        })
       
     }

 submit = (data) => {
    Meteor.call('trips.insert', data, (err, res) => {
        if (!err){
            console.log('success');
            this.setState({
            tripId: res
          }) 
              
        } else {
          console.error(err.reason);
        }
      })
 }

 remove = (data) => {
    Meteor.call('trips.remove'), data, (err, res) => {
      if (!err){
        console.log('success', res);      
      } else {
      console.error(err.reason);
    }
  };
}


    render(){
        const { list } = this.state;

        return(
            <div className="cc-page-content__autoform">
                <h1>Dashboard</h1>
                <AddTrip submit={this.submit} />

                <div>
                   <TripsList list={list} />
                </div> 

                <div>
                    <button className="cc-form__button" onClick={()=> Accounts.logout()}>Log Out</button>
                </div>
            </div>  
             
        );
    }
}

export default Dashboard;
