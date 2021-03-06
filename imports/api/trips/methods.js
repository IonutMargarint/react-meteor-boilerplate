import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import Trips from '/imports/db/trips/trips';

Meteor.methods({
    'trips.insert'(trip){
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }
                Trips.insert(trip);
             },
    'trips.getAll'(){
        return Trips.find({}).fetch()
        
    },
    'trips.remove'(trip){
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        Trips.remove({_id: trip});
    }
});