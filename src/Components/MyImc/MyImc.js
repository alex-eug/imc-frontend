import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import './myImc.css'
import axios from "axios";

export default function MyImc() {
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    let storeUserName = localStorage.getItem('userName')
    // let userId = localStorage.getItem('userId')
    //    console.log("bonjour",token);
    const [inputs, setInputs] = useState({});
    // const [imc, setImc] = useState()



    const handleChange = (e) => {
        const name = (e.target.name);
        const value = (e.target.value);
        setInputs(values => ({ ...values, [name]: value }))
      
        //console.log(yourImc);
       
    }
    let imc =   ((inputs.weight / (inputs.height * inputs.height)) * 10000).toFixed(2)
    


    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("bonjourtoken",token);

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
            imc: imc,
        }
        await axios.post('http://127.0.0.1:3000/myimc', bodyParameters, config)
        navigate('/showimc')

    }
    
    


    return (
        <div className='myimc-container'>
            <div className='title-container'>
                <h2 className="myimc-h2">Bienvenue <span>{storeUserName}</span></h2>
                <button
                    className=' evo-imc'
                    onClick={() => navigate('/showimc')}
                >

                    Voir l'évolution de mon IMC
                </button>
            </div>
            <form className='formContainer-myimc' onSubmit={handleSubmit}>
                <label className="myimc-label">Taille(cm)
                    <input className='myimc-input'
                        type="number"
                        name="height"
                        value={inputs.height || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className="myimc-label">Poids(kg)
                    <input className='myimc-input'
                        type="number"
                        name="weight"
                        value={inputs.weight || ""}
                        onChange={handleChange}
                    />
                </label>

                <button className='myimc-button' type="submit">
                    enregistrer votre imc
                </button>
                
                <p 
                className="myimc-para">{isNaN(imc) ? " " : "Votre imc est de " + imc}
                </p>
          
            </form>


        </div>
    )

    
}
