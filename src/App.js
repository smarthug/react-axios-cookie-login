import React from 'react';

import LoginRegister from 'react-mui-login-register';
import Axios from 'axios';

import { CookiesProvider, withCookies } from 'react-cookie';

//import './App.css';



function App(props) {

  const { cookies } = props;

  const handleLogin = content => {
    alert(`Logging in with content '${JSON.stringify(content)}'`);
    login(content);
  };

  const handleLoginWithProvider = providerId => {
    alert(`Logging in with provider '${providerId}'`);
  };

  const handleRegister = content => {
    alert(`Registering with content '${JSON.stringify(content)}'`);
  };

  const handleRegisterWithProvider = providerId => {
    alert(`Registering with provider '${providerId}'`);
  };

  const config = { headers: { Authorization: `Token ${cookies.get('token')}`} , xsrfCookieName:'csrftoken', xsrfHeaderName:'X-CSRFToken' } 

  const login = async (content) => {
    await Axios.post('http://127.0.0.1:8000/auth/token/login/', content , config).then(
      (response) => {
        console.log(response)
        console.log(response.data)
        //document.cookie = 'token='+ (response.data.token).toString()

        
        cookies.set('token', response.data.token, { path: '/' });
        console.log(cookies.get('token')); // Pacman
      }
    ).catch((error) => {
      console.log(error)
    })
  }

  return (
    <CookiesProvider>

      <div className="App">
        <LoginRegister
          onLogin={handleLogin}
          onLoginWithProvider={handleLoginWithProvider}
          onRegister={handleRegister}
          onRegisterWithProvider={handleRegisterWithProvider}
        />
      </div>
    </CookiesProvider>
  );



}

export default withCookies(App);
