import React from 'react';
import Joi  from 'joi-browser';
import Form from './common/form';
import {login} from '../services/authService';




class LoginForm extends Form {

    state = {
       data: {username:"" , password:""}, // account property includes all the data in the form

        errors: {}
    };

   schema = {    // schema is completely dependent on the kind of form to design;cant be a part of reusable component
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
   };

   doSubmit = async () => {

    try {
        const {data} = this.state;
      const {data:jwt} = await login(data.username, data.password); // this stores the jason web token which is usually the response data sent from server when a user successfully logs in. data has already been declared,so i am giving  returned data another name;jwt
    localStorage.setItem('token', jwt); //token from server for authentication is stored in a local storage of my browser.
    this.props.history.push("/") // This props has an history method that can push the user back to any other route...in ths case,homepage route "/"
    } catch (ex) {

        if (ex.response && ex.response.status === 400) {
            const errors = {...this.state.errors};
            errors.username = ex.response.data;
            this.setState({errors});
        }
        
    }

   
    
   
   };



    

  //  componentDidMount() {
      //  this.username.current.focus(); // when this component is mounted,put focus on the element in the username.
   // };

   

    
   
    
    
    render() {  // render method is specific to a type of form

       
        
        
        return (<div>
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>

           {this.renderInput('username', 'Username')}
           {this.renderInput('password', 'Password', "password")}
            
                
                
            {this.renderButton("Login")}
            </form>


        </div>);
    }
}
 
export default LoginForm;
