import React, { Component } from 'react';

const Input = ({name, label, value, onChange,error}) => {            //functional because its a controlled component
    return ( <div className="mb-3">
        <label htmlFor={name}>{label}</label>
        <input 
    
        value={value} 
        onChange={onChange} 
        id={name} 
        name={name} 
        type="text" 
        className="form-control" />
        {error && <div className="alert alert-danger">{error}</div> } 
        </div> 
//  from the line above,if error is true,then the alert alert-danger will be rendered,if false,it will be ignored.
        
        
        
        
        
        
        
        
        );
}
 
export default Input;