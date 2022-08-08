import React, { Component } from 'react';
import Joi  from 'joi-browser';
import Input from './input';
import Select from './select';


class Form  extends Component { // There is no render() method here as this is just a reusable component Form that can extend another component Y
    state = {  

        data: {},
        errors: {}


    }; 

    validate = () => { 
        // validating all the fields at the same time
 
     const options = {abortEarly: false};
 
     const {error} = Joi.validate(this.state.data, this.schema, options);
     if (!error) return null;
 
     const errors = {};
     for (let item of error.details) errors[item.path[0]] = item.message;
 
     return errors;
 
     
 
    };

    validateProperty = ({name, value}) => {   
        
        const obj = {[name]: value};// validating one field at a time
        const schema = {[name]: this.schema[name]};
        const {error}=Joi.validate(obj, schema); // adding {abortEarly} will display all the errors at once at the user..and this is not good
         return error ? error.details[0].message : null;
    

    };


    handleSubmit = e => {

        e.preventDefault();

         //Accessing the DOM(document.getElement('username')) in react. React is about abstracting the DOM
         
        const errors = this.validate();
        
        this.setState({errors: errors || {}});

        if (errors) return; // dont call server

        this.doSubmit();  // call the server



    };

    handleChange = ({currentTarget: input}) => {  // VALIDATING THE input of data into form
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
   
        else delete errors[input.name];
        
        
           const data = {...this.state.data}; //
        data[input.name] = input.value;
        this.setState({data,errors});
   
       };

       renderButton(label){

        return (
        <button disabled={this.validate()}className="btn btn-primary">{label}</button>
        );
            
        }

        renderSelect(name,label, options) {
            const {data, errors} = this.state;

            return (

                <Select
                name={name}
                value={data[name]}
                label= {label}
                options = {options}
                onChange = {this.handleChange}
                error = {errors[name]}
                />
            );
        }
        renderInput(name, label, type = "text") {
        
            const {data, errors} = this.state;

            return (

                <Input 
                type={type}
                name={name} // or 'username'
                value={data[name]} // or {data.username}
                label={label} // or 'Username'
                onChange={this.handleChange} 
                error={errors[name]}/> // or {errors.username}
            );
            }
    
    
    
}
 
export default Form ;