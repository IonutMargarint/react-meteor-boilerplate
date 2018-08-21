import AddTripSchema from '../../ui/AddTrip';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Trips = new Mongo.Collection('trips');
Trips.attachSchema(AddTripSchema);

if(Meteor.isServer){
    Meteor.publish('trips', function (){
        return Trips.find({userId: this.userId});
    });
}

Meteor.methods({
    'trips.insert'(name){
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        Trips.insert({
           name
        });
    }
    
});
