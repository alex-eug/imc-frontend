import React, {  useState } from 'react';
import { useNavigate } from 'react-router';
import './myImc.css'
import axios from "axios";

export default function MyImc() {
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
   // let userId = localStorage.getItem('userId')
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

   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("bonjourtoken",token);

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
       imc: imc,
    }
    await axios.post('http://127.0.0.1:3000/myimc',bodyParameters,config)
    navigate('/showimc')
   
    }


    return (
        <div>
            <form className='formContainer-myimc' onSubmit={handleSubmit}>
                <label className="myimc-label">Taille(cm):
                    <input  className='myimc-input'
                        type="number"
                        name="height"
                        value={inputs.height || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className="myimc-label">Poids(kg):
                    <input className='myimc-input'
                        type="number"
                        name="weight"
                        value={inputs.weight || ""}
                        onChange={handleChange}
                    />
                </label>

                <button className='myimc-button' type ="submit">
                    enregistrer votre imc
                </button>
               
                <p className="myimc-para">{isNaN(imc)?" ":"Votre imc est de "+ imc}</p>

            </form>
        </div>
    )
}
