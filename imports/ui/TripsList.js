import React from 'react';
import { Tracker } from 'meteor/tracker';
import trips from './../db/trips/trips';
import Trip from './../ui/Trip';

export default class TripsList extends React.Component{
        constructor(props){
            super(props);
            
        }
        

        render(){
            return(
                <div>
                    {this.props.list.map((val, index)=>{
                            return(
                                <Trip
                                key={val._id}
                                id={val._id}
                                name={val.name}
                                price={val.price}
                                message={val.message}
                            />
                            
                        );
                    }) }
                    <button>Test from tripslist</button>
                </div>
            );     
        }
    }; 
    

