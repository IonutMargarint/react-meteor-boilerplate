import React from 'react';
import ReactDOM from 'react-dom';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';

import TripsSchema from './../db/trips/schema';
import Modal from './Modal';


export default class AddTrip extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
 

  onSubmit(data){
    
    Meteor.call('trips.insert', data, (err, res) => {
      if (!err){
          handleCloseModal();
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
          <button onClick={this.handleOpenModal}>
            Add New Trip
          </button>
          
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}
            >
              This is the secret modal message!

                 <AutoForm 
                    schema={TripsSchema} 
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


