import React from 'react';

import LoginRegister  from 'react-mui-login-register';
import Axios from 'axios';

//import './App.css';

function App() {

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

  const login = async (content) => {
    await Axios.post('http://127.0.0.1:8000/auth/token/login/' , content).then(
      (response)=>{
        console.log(response)
      }
    ).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="App">
      <LoginRegister 
                         onLogin={handleLogin}
                         onLoginWithProvider={handleLoginWithProvider}
                         onRegister={handleRegister}
                         onRegisterWithProvider={handleRegisterWithProvider}
          />
    </div>
  );



}

export default App;
