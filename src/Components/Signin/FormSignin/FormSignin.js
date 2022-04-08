import React, { useState } from 'react'

export default function Form() {

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
      } else{
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
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>email:
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>password:
          <input
            type="password"
            autoComplete='password'
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <label>password check:
          <input
            type="password"
            name="passwordCheck"
            autoComplete='passwordCheck'
            value={inputs.passwordCheck || ""}
            onChange={handleChange}
          />
        </label>
        <label>user-name:
          <input
            type="text"
            name="userName"
            value={inputs.userName || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">envoyer</button>
      </form>
    </div>
  )
}
