import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

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

       doSubmit = () => {

        console.log("Submitted"); // call the server
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