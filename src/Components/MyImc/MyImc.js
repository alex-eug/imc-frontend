import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function MyImc() {

    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')
    //    console.log("bonjour",token);
    const [inputs, setInputs] = useState({});
    const [imc, setImc] = useState()

    const handleChange = (e) => {
        const name = (e.target.name);
        const value = (e.target.value);
        setInputs(values => ({ ...values, [name]: value }))
        let yourImc = Math.round((inputs.weight/(inputs.height*inputs.height))*100000)
        setImc(yourImc)
        console.log(yourImc);
    }

   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("bonjourtoken",token);

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
       imc: imc,
    }
    axios.post('http://127.0.0.1:3000/myimc',{imc},config)
    .then(console.log).catch(console.log);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Taille(cm):
                    <input
                        type="number"
                        name="height"
                        value={inputs.height || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Poids(kg):
                    <input
                        type="number"
                        name="weight"
                        value={inputs.weight || ""}
                        onChange={handleChange}
                    />
                </label>

                <button type='submit'>
                    calculer votre imc
                </button>


            </form>
        </div>
    )
}
