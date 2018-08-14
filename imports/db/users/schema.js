import SimpleSchema from 'simpl-schema';

const UsersSchema = new SimpleSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        regEx: SimpleSchema.RegEx.Email
    },
    password:{
        type: String,
        min: 6,
        required: true
    }
    
});

export default UsersSchema;