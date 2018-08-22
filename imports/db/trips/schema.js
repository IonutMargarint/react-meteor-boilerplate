import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    name: {
        type: String,
        label: "Title",
        required: true
    },
    price: {
        type: Number,
        label: "Budget",
        required: true
    },
    message:{
        type: String,
        label: "Other details"
    }
  });