import React from 'react'
import FormSignin from './FormSignin/FormSignin'
import './signin.css'

export default function Signin() {
  return (
    <div className='signinContainer'>
        <h2 className="signin-title">SIGN IN</h2>
        <FormSignin />
    </div>
  )
}
