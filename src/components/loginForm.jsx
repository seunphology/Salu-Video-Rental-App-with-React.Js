import React, { Component } from 'react';

class LoginForm extends Component {

    username = React.createRef();

  //  componentDidMount() {
      //  this.username.current.focus(); // when this component is mounted,put focus on the element in the username.
   // };

    handleSubmit = e => {

        e.preventDefault();

        const username = this.username.current.value; //Accessing the DOM(document.getElement('username')) in react. React is about abstracting the DOM




    }

    handleChange = e => {
     const account = {...this.state.account};
     account.username = e.currentTarget.value;
     this.setState({account})

    }
    
    render() { 
        return <div>
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>
                <div className="mb-3"><label htmlFor="username"></label>Username<input autoFocus ref={this.username} value={this.state.account.username} onChange={this.handleChange} id="username" type="text" className="form-control" /></div>
                <div className="mb-3"><label htmlFor="password"></label>Password<input id="password" type="text" className="form-control" /></div>
                <button className="btn btn-primary">Login</button>
            </form>


        </div>;
    }
}
 
export default LoginForm;
