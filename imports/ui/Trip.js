import React from 'react';
import Trips from './../db/trips/trips';

export default class Trip extends React.Component{
    render (){ 
        return (
            <div key={this.props.trip._id} className={test}>
                <div className="test">
                   <p>test</p>
                </div>
            </div>
        );
        
        
    }
};