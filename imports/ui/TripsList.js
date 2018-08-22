import React from 'react';
import trips from './Trip';

export default class TripsList extends React.Component{
        renderTrips(){
        
            if(trips){
                return (
                    <div className="test">
                        <p className="">Add your first trip to get started!</p>
                    </div>
                );
            } else {
            // return this.props.trips.map((trip) => {
            //  return <Trip key={trip._id} trip={trip}/>;
            console.log('test');
            // });
            }
        }
        
        render(){
            return (
                    <div>
                        
                            {this.renderTrips()}
                        
                        <p>Test</p>
                    </div>  
                );
        }
    }; 
    

