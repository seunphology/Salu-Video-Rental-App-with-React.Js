import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService'; // This method of import brings all the functions in userService as methods here e.g userService.register()
import { times } from 'lodash';

class RegisterForm extends Form {
    state = { 

        data: {username: "" , password: "" , name: ""},
        errors: {}
     }; 

     schema = {    // schema is completely dependent on the kind of form to design;cant be a part of reusable component
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")

       };

       doSubmit = async () => {
        try {
        await userService.register(this.state.data);
        }
        catch (ex) {
            if (ex.response && ex.response.status ===400) {
                const errors = {...this.state.errors}; // clone error
                errors.username= ex.response.data; // error message from server
                this.setState({errors});
            }
        }

     // call the server
    };
    render() { 
        return (

            <div>
                <h1>Register</h1>
    
                <form onSubmit={this.handleSubmit}>
    
               {this.renderInput('username', 'Username')}
               {this.renderInput('password', 'Password', "password")}
                {this.renderInput("name", "Name")}    
                {this.renderButton("Register")}
                </form>
    
    
            </div>

        );
    }
}
 
export default RegisterForm;