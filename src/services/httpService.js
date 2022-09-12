
import axios from 'axios';
import {toast} from 'react-toastify';
import logger from './logService';



axios.interceptors.response.use(null, error => { // the argument is usually .use(success, error =>{}) but I dont want to intercept or log success,just error. Intercepting error globally...from componentdidmount to when form is filled
 
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;   // This is the range for expected error
   
    if (!expectedError) {
     // This logs the error and an unexpected one: usually from the network or server or database
    logger.log(error);
     toast.error("An unexpected error occurred");
}
    
   
   return Promise.reject(error); // The rejected promise object has the error passed into it and uses control to send this error to the catch block at the bottom of this code
  
  });

  function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
  }

  export default  {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
  }