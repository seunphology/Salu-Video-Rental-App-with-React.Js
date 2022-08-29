import React, { Component } from 'react';
import auth from '../services/authService';

class Logout  extends Component {
    componentDidMount() {

        auth.logout();

        

        window.location = '/'; // after the token is removed and user signed out,it redirects back to homepage by reloading the app.js
        
    }
    render() { 
        return null;
    }
}
 
export default Logout ;
