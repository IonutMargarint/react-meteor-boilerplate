import React from 'react';
import ReactDOM from 'react-dom';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import { withTracker } from 'meteor/react-meteor-data';
import Trips from './../db/trips/trips';
import Modal from './Modal';

export default class AddTrip extends React.Component {
 
  state = {
    showModal: false
  }
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})

  onSubmit(data){
    
    const name = data.name;
    const price = data.price;
    const message = data.message;

    Meteor.call('trips.insert', name, (err, res) => {
      if (!err){
          this.handleCloseModal();
      }else {
          console.log(err.reason);
      }
  });
    
}

  render() {
  
    return (
      
        <div className="cc-page-content__autoform">
          <h1>Add, Edit or Delete Your Trip</h1>
          <p>Here you can add a new trip.</p>
          <button onClick={this.handleShowMessageClick}>
            Add New Trip
          </button>
          
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}
            >
              This is the secret modal message!

                 <AutoForm 
                    schema={AddTripSchema} 
                    onSubmit={this.onSubmit}
                    // className="cc-page-content__autoform"
                >
                   
                   <div>    
                       <AutoField name="name"/>
                       <ErrorField name="name"/>
                   </div>
           
                   <div>
                       <AutoField name="price"/>
                       <ErrorField name="price"/>
                   </div>

                   <div>
                       <AutoField name="message"/>
                       <ErrorField name="message"/>
                   </div>

                   <div className="">    
                        <button>+ Add Trip
                        </button>
                   </div>

               </AutoForm>
            </Modal>
          ) : null}
        </div>
      
    )
  }
}

const AddTripSchema = new SimpleSchema({
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
}, {tracker: Tracker});

