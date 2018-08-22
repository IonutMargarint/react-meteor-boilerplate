import TripsSchema from '../../db/trips/schema';
import { Mongo } from 'meteor/mongo';

const Trips = new Mongo.Collection('trips');
Trips.attachSchema(TripsSchema);

export default Trips;

