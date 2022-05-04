import React, { useState } from 'react'
import  { useNavigate }  from "react-router-dom";
import './formLogin.css'

export default function FormLogin() {
    let navigate =  useNavigate();
    const [inputs, setInputs] = useState({});
    let tokenStore,tokenStoreUser = ""
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
            .then(data => {
                console.log(data);
                const userId = data[0].userId;
                const token = data[0].token;
                console.log(userId,token);
                localStorage.setItem('token',token);
                localStorage.setItem('userId',userId);
                 tokenStore = localStorage.getItem('token')
                 tokenStoreUser = localStorage.getItem('userId')
                console.log('tokenStore',tokenStore,"userId",tokenStoreUser);
                
                navigate('/myimc')
            });

    }
    return (
      
            <form className="formContainer-login" onSubmit={handleSubmit} >
                <label className='label-login'>email:
                    <input className='input-login'
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='label-login'>password:
                    <input className='input-login'
                        type="password"
                        autoComplete='password'
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>
                <button className='login-button' type="submit">envoyer</button>
            </form>
       
    )
}
