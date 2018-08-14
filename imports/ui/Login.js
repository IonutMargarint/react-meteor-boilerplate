import React from 'react';
import { AutoForm, AutoField, ErrorField } from 'uniforms-unstyled';
import UsersSchema from './../db/users/schema';

class Login extends React.Component {
    render(){
        return(
        <main className="login">
                <AutoForm schema={UsersSchema}>
                    <AutoField className="login-email" name="email"/>
                    <ErrorField name="email"/>

                    <AutoField className="login-password" name="password" type="password"/>
                    <ErrorField name="password"/>
                    <div className="forgot-password"> <a href="#">Forgot my password!</a>
                        <div className="sign-in">
                            <button type="submit">
                            Sign in
                            </button>
                        </div>
                    </div>    
                </AutoForm>
        </main>
        )
    }
}
export default Login;