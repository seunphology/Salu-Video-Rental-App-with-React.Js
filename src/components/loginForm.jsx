import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {

    state = {
        account: {username:"" , password:""}
    };

    username = React.createRef();

  //  componentDidMount() {
      //  this.username.current.focus(); // when this component is mounted,put focus on the element in the username.
   // };

    handleSubmit = e => {

        e.preventDefault();

         //Accessing the DOM(document.getElement('username')) in react. React is about abstracting the DOM




    };

    handleChange = ({currentTarget: input}) => {
     const account = {...this.state.account};
     account[input.name] = input.value;
     this.setState({account});

    };
    
    render() { 

        const {account} = this.state;
        
        
        return (<div>
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>

            <Input name="username"
             value={account.username} 
             label="Username" 
             onChange={this.handleChange} />
           
            <Input name="password" 
            value={account.password} 
            label="Password" 
            onChange={this.handleChange} />
                
            
                <button className="btn btn-primary">Login</button>
            </form>


        </div>);
    }
}
 
export default LoginForm;
