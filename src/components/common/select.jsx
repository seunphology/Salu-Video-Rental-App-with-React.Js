import React from 'react';

const Select = ({name,label,options,error,...rest}) => {
    return ( <div className="mb-3">
    <label htmlFor={name}>{label}</label>
    <select 

    {...rest} // automatically initializes other properties in the input props like: onChange,type and value
    
    id={name} 
    name={name} 
    className="form-control">
    <option value="" />
    {options.map(option => (
        <option key={option._id} value={option._id}>
        {option.name}
        </option>
    ))}
    </select>
    {error && <div className="alert alert-danger">{error}</div> } 
    </div> 



     );
}
 
export default Select;