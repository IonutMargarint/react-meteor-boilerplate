import RegisterSchema from '../../ui/Register';
import { Mongo } from 'meteor/mongo';

const Users = new Mongo.Collection("users");
Users.attachSchema(RegisterSchema);

export default Users;