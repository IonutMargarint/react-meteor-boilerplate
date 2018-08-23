import React from 'react';
import trips from './../db/trips/trips';

export default class Trip extends React.Component{

  constructor(props){
    super(props);
  }

    deleteTrip(){
        var id = this.props.id
        trips.remove({_id: id})
       }

        render(){
               
          const { id, name, price, message } = this.props;
          console.log(name, id);               
               return (
                   <div className="test">
                     <p>{id} {name}</p>
                     
                     <button onClick={this.deleteTrip.bind(this)}>X</button>
                     <button>Test from trip</button>
                   </div>
                 )
                }
               };