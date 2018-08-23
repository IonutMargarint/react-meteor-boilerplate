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
// //res id, o alta metoda meteor.call cu getbyId , cu id de document (res)
// adaugre la lista de nou document
          }) 
              
        } else {
          console.error(err.reason);
        }
      })
 }


    render(){
        const { list } = this.state;

        return(
            <div className="cc-page-content__autoform">
                <h1>Dashboard</h1>
                <AddTrip submit={this.submit} />
                <div>
                    <button className="cc-form__button" onClick={()=> Accounts.logout()}>Log Out</button>
                </div>

                <h2>
                   <TripsList list={list} />
                </h2> 
            </div>  
             
        );
    }
}

export default Dashboard;
