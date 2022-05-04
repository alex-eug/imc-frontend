import React from 'react';
import FormLogin from './FormLogin/FormLogin';
import './login.css'

export default function Login() {
  
  return (
    <div className='loginContainer'>

        <h2 className="login-title">LOGIN</h2>
        <FormLogin />
    </div>
  )
}
