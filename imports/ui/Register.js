import React from 'react';
import { Link } from 'react-router-dom';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';
import { Accounts } from 'meteor/accounts-base';
import { Redirect } from 'react-router-dom';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        redirect: false
      }

    onSubmit = (data) => {
        const {email, password} = data;
        
        Accounts.createUser({
            email,
            password,
        }, this.setState({ redirect: true }), 
            (err) => {
                if (!err) {
                console.log('User registered!'); 
                }
                else {
                    alert(err.reason);
                }
        })
    };

    render(){
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/dashboard'/>;
        }

      return (
        <main className="cc-page-content">
            <Link to='/' className="cc-header__title">Home</Link>
            <AutoForm schema={RegisterSchema} 
            onSubmit={this.onSubmit}
            className="cc-page-content__autoform"
            >
                <AutoField className="cc-page-content__autofield" name="name"/>
                <AutoField className="cc-page-content__autofield" name="email"/>
                <ErrorField name="email"/>

                <AutoField className="cc-page-content__autofield" name="password" type="password"/>
                <ErrorField name="password"/>
                <AutoField className="cc-page-content__autofield" name="confirm_password" type="password"/>
                <ErrorField name="confirm_password"/>

                <div className="sign-up">
                    <button className="cc-form__button" type="submit">
                        Sign up
                    </button>
                </div>
            </AutoForm>
    </main>
          ); 
        }     
  }

  const RegisterSchema = new SimpleSchema({
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
    },
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
}, {tracker: Tracker});

  export default Register;