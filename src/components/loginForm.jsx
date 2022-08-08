import React, { Component } from 'react';
import Joi  from 'joi-browser';
import Form from './common/form';




class LoginForm extends Form {

    state = {
       data: {username:"" , password:""}, // account property includes all the data in the form

        errors: {}
    };

   schema = {    // schema is completely dependent on the kind of form to design;cant be a part of reusable component
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
   };




    username = React.createRef();


  //  componentDidMount() {
      //  this.username.current.focus(); // when this component is mounted,put focus on the element in the username.
   // };

   

    
   
    
    
    render() {  // render method is specific to a type of form

        const {data, errors} = this.state;
        
        
        return (<div>
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>

           {this.renderInput('username', 'Username')}
           {this.renderInput('username', 'Password', "password")}
            
                
                
            {this.renderButton("Login")}
            </form>


        </div>);
    }
}
 
export default LoginForm;
