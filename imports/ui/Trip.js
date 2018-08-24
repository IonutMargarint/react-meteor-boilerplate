import React from 'react';
import Trips from './../db/trips/trips';

export default class Trip extends React.Component{

  constructor(props){
    super(props);
  }

  onRemove = (data) => {
    const { remove } = this.props;
    console.log(remove);
    remove(data);
  };
        render(){
               
          const { id, name, price, message } = this.props;
          console.log(name, id);               
               return (
                   <div className="cc-trip__entry">
                     <p className="cc-trip__details"><strong>Trip number:</strong> {id}</p>
                     <p className="cc-trip__details"><strong>Trip title:</strong> {name}</p> 
                     <p className="cc-trip__details"><strong>Trip budget:</strong> {price}</p> 
                     <p className="cc-trip__details"><strong>Trip details:</strong> {message}</p>
                     <button
                      className="cc-trip_button" 
                      onClick={this.onRemove}>X</button> 
                   </div>
                 )
                }
               };