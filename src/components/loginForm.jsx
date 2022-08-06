import React, { Component } from 'react';
import Joi  from 'joi-browser';
import Form from './common/form';
import Input from './common/input';



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

   

    
    
    doSubmit = () => {

        console.log("Submitted"); // call the server
    };

    
    
    render() {  // render method is specific to a type of form

        const {data, errors} = this.state;
        
        
        return (<div>
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>

            <Input name="username"
             value={data.username} 
             label="Username" 
             onChange={this.handleChange} 
             error={errors.username}/>
           
            <Input name="password" 
            value={data.password} 
            label="Password" 
            onChange={this.handleChange}
            error= {errors.password} />
                
                
                <button disabled={this.validate()}className="btn btn-primary">Login</button>
            </form>


        </div>);
    }
}
 
export default LoginForm;