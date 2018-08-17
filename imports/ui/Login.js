import React from 'react';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (data) => {

        const {email, password} = data;
        const { history } = this.props;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                console.log('Logged in!');
                    history.push('/dashboard');
            } else {
                alert(err.reason);
            }
        });
    };

    render(){
        return(
        <main className="cc-page-content">
                <Link to='/' className="cc-header__title">Home</Link>
                <AutoForm schema={LoginSchema} 
                onSubmit={this.onSubmit}
                className="cc-page-content__autoform"
                >
                    <AutoField className="cc-page-content__autofield" name="name"/>
                    <AutoField className="cc-page-content__autofield" name="email" type="email"/>
                    <ErrorField name="email"/>

                    <AutoField className="cc-page-content__autofield" name="password" type="password"/>
                    <ErrorField name="password"/>
                    <div className="cc-forgot-password"> 
                        <a href="#">Forgot my password!</a>
                        <div>
                            <button className="cc-form__button" type="submit">
                            Sign in
                            </button>
                        </div>
                    </div>    
                </AutoForm>
        </main>
        );
    }
}

const LoginSchema = new SimpleSchema({
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
}, {tracker: Tracker});

export default Login;