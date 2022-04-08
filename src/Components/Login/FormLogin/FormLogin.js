import React, { useState } from 'react'

export default function FormLogin() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = (e.target.name);
        const value = (e.target.value);
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://127.0.0.1:3000/login", {
            method: 'POST',
            body: JSON.stringify({
                email: inputs.email,
                password: inputs.password,

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));

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
                <button type="submit">envoyer</button>
            </form>
        </div>
    )
}
