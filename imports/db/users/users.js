// import { Meteor } from 'meteor/meteor';
// import SimpleSchema from 'simpl-schema';
// import { Accounts } from 'meteor/accounts-base'; 
// import Users from './collection';

// Accounts.validateNewUser((Users) => {
//     const email = Users.emails[0].address;
    
//         new SimpleSchema({
//             email: {
//                 type: String,
//                 regEx: SimpleSchema.RegEx.Email
//             }
//         }).validate({ email });
//     return true;
// });