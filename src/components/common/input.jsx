import React, { Component } from 'react';

const Input = ({name, label, value, onChange}) => {            //functional because its a controlled component
    return ( <div className="mb-3">
        <label htmlFor={name}>{label}</label>
        <input 
    
        value={value} 
        onChange={onChange} 
        id={name} 
        name={name} 
        type="text" 
        className="form-control" />
        </div> 
        
        
        
        
        
        
        
        );
}
 
export default Input;