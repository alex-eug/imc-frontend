import React, { useState } from 'react'
import  { useNavigate }  from "react-router-dom";
import './formSignin.css'

export default function Form() {
  let navigate = useNavigate()
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = (e.target.name);
    const value = (e.target.value);
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputs.password !== inputs.passwordCheck) {

      console.log("mauvais password")
    } else {
      fetch("http://127.0.0.1:3000/signin", {
        method: 'POST',
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
          userName: inputs.userName,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));

    }
    navigate('/login')
  }
  return (

    <form className='formContainer-signin' onSubmit={handleSubmit} >
      <label className="label-signin" >email
        <input
          className="input-signin"
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <label className="label-signin">password
        <input
          className="input-signin"
          type="password"
          autoComplete='password'
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <label className="label-signin">password confirm
        <input
          className="input-signin"
          type="password"
          name="passwordCheck"
          autoComplete='passwordCheck'
          value={inputs.passwordCheck || ""}
          onChange={handleChange}
        />
      </label>
      <label className="label-signin">user-name
        <input
          className="input-signin"
          type="text"
          name="userName"
          value={inputs.userName || ""}
          onChange={handleChange}
        />
      </label>
      <button className="signin-button" type="submit">envoyer</button>
    </form>

  )
}
