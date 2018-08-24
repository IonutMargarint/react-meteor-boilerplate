import React from 'react';
import ReactDOM from 'react-dom';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';
import TripsSchema from './../db/trips/schema';
import Modal from './Modal';
import TripsList from './TripsList';


export default class AddTrip extends React.Component {
  constructor(props){
    super(props);
    this.formRef = null;

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  onSubmit = (data) => {
    const { submit } = this.props;
    console.log(data);
    submit(data);
    this.formRef.reset();
    this.handleCloseModal();
    window.location.reload();
  };

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render() {
    
      
    return (
      <div className="cc-page-content__autoform">
          <h1>Add, Edit or Delete Your Trip</h1>
          <p className="cc-add-trip__txt">Add your new trip!</p>
          <button 
          onClick={this.handleOpenModal}
          className="cc-form__button"
          >
            Add New Trip
          </button>      
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}
            >
              Add Your New Trip!

                 <AutoForm 
                    ref={ref => this.formRef = ref}
                    model={this.state.model}
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
                   <button onClick={this.handleCloseModal}>Close</button>  
               </AutoForm>
            </Modal>
          ) : null}
        </div>
      
    )
  }
}


